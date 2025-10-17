import { Box, Button, CircularProgress, IconButton, Modal, Stack, TextField, Typography } from '@mui/material'
import { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import { Textarea } from '@mui/joy';
import { useBreakpoint } from '../../../../hooks/useBreakpoint';
import { Form, Formik } from 'formik'
import { contactFormSchema, getInitialValues } from './ContactFormModalUtils';
import { useNavbarTranslations } from '../../../../i18n/useTranslations';

interface ContactFormModalProps {
  openContactModal: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ openContactModal, onClose }: ContactFormModalProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"success" | "error" | "idle">("idle");
  const { isMobile } = useBreakpoint();
  const { t } = useNavbarTranslations();

    const sendEmail = (data: { email: string; message: string }) => {
        setSendingEmail(true);

        if (form.current) {
            setSendingEmail(true);
            emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_KEY as string,
                import.meta.env.VITE_EMAILJS_TEMPLATE_KEY as string,
                data,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
            )
            .then(() => {
                    setEmailStatus("success");
                }
            ).catch((error) => {
                console.error("EmailJS error:", error);
                setEmailStatus("error");
            }).finally(() => {
                setTimeout(() => {
                    setEmailStatus("idle");
                    onClose();
                    setSendingEmail(false);
                }, 2000);
            });
        }
    };

    return (
        <Modal
            open={openContactModal}
            onClose={onClose}
            >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? '90%' : '500px',
                bgcolor: '#cedfed',
                borderRadius: '28px',
                boxShadow: 24,
                p: 4,
            }}>
                <Formik 
                    enableReinitialize
                    initialValues={getInitialValues()}
                    validationSchema={contactFormSchema(t)}
                    validateOnChange={true}
                    validateOnBlur={true}
                    onSubmit={async (data, { resetForm }) => {
                        sendEmail(data);
                        resetForm();
                    }}
                >
                {({ isValid, dirty, handleSubmit, resetForm, handleBlur, touched, errors, values, handleChange }) => {
                   return (
                    <Form ref={form}>
                        <Stack spacing={2} position={'relative'}>
                        <Box
                            sx={{
                            position: 'absolute',
                            top: '-20px',
                            right: '-20px',
                            }}>
                                <IconButton onClick={onClose} sx={{
                                    borderRadius: '40px',
                                    width: '30px',
                                    height: '30px',
                                }}>
                                    <span className="material-icons" style={{ cursor: 'pointer', color: 'gray' }} >close</span>
                                </IconButton>
                        </Box>
                        { !sendingEmail ?
                        <>
                            <Typography variant="h6" component="h2" textAlign={'center'}>
                                {t('contactForm.title')}
                            </Typography>
                            <TextField
                                label={t('contactForm.email')}
                                type="email"
                                name="email"
                                placeholder={t('contactForm.emailPlaceholder')}
                                sx={{
                                    backgroundColor: '#fff'
                                }}
                                size='small'
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                error={touched["email"] && Boolean(errors["email"])}
                                helperText={touched["email"] && errors["email"]}
                            />
                            <Textarea
                                minRows={3}
                                sx={{
                                    backgroundColor: '#fff'
                                }}
                                name="message"
                                placeholder={t('contactForm.messagePlaceholder')}
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.message}
                                error={touched["message"] && Boolean(errors["message"])}
                            />
                            <Stack direction={'row'} spacing={2} justifyContent={'flex-end'}>
                                <Button onClick={() => {
                                    resetForm();
                                    onClose()
                                }} variant='contained' color='secondary'>{t('contactForm.cancel')}</Button>
                                <Button disabled={!isValid || !dirty} onClick={() => handleSubmit()} variant='contained'>{t('contactForm.send')}</Button>
                            </Stack>
                        </> :
                            <Stack alignItems={'center'} justifyContent={'center'} spacing={2} sx={{ minHeight: '200px' }}>
                                {(() => {
                                    switch(emailStatus) {
                                        case "idle":
                                            return <CircularProgress />;
                                        case "success":
                                            return <img src="/images/default/green_check.png" alt="Success" width={80} height={80} />;
                                        case "error":
                                            return <img src="/images/default/error.png" alt="Error" width={80} height={80} />;
                                        default:
                                            return null;
                                    }
                                })()}
                            </Stack>
                        }
                    </Stack> 
                    </Form>)
                }}
                </Formik>
            </Box>
        </Modal>
    )
}

export default ContactFormModal
