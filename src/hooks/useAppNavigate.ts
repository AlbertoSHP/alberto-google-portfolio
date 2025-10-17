import { useLocation, useNavigate } from "react-router-dom";

interface UpdateQueryOptions {
  path?: string;
  replace?: boolean;
}

export function useAppNavigate() {
  const location = useLocation();
  const navigate = useNavigate();

  type ParamValue = string | number | boolean | null | undefined;
  type ParamsRecord = Record<string, ParamValue>;

  const updateQueryParams = (
    params: ParamsRecord = {},
    options: UpdateQueryOptions = {}
  ): void => {
        const { path, replace = false } = options;
    const searchParams = new URLSearchParams(location.search);

    const removeIdFromSearchParamIfNotInParams = () => {
      if (!params['id'] && searchParams.get('id')) {
        searchParams.delete('id');
      }
    };

    Object.entries(params).forEach(([key, value]) => {
      if (value === null || value === undefined || value === "") {
        searchParams.delete(key);
      } else {
        searchParams.set(key, String(value));
      }
    });

    const targetPath = path ?? location.pathname;
    removeIdFromSearchParamIfNotInParams();
    const newUrl = params ? `${targetPath}?${searchParams.toString()}` : targetPath;

    navigate(newUrl, { replace });
  };

  const getParamValue = (key: string): string | null => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
  }

  const setParamValue = (key: string, value: ParamValue): void => {
    const searchParams = new URLSearchParams(location.search);
    if (value === null || value === undefined || value === "") {
      searchParams.delete(key);
    } else {
      searchParams.set(key, String(value));
    }
    const newUrl = `${location.pathname}?${searchParams.toString()}`;
    navigate(newUrl, { replace: true });
  }

  return {
    updateQueryParams: updateQueryParams,
    getParamValue: getParamValue,
    setParamValue: setParamValue,
    location: location,
    isMainPage: location.pathname === '/',
    isCVPage: location.pathname === '/cv', 
  };
}