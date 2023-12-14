import { z } from 'zod';

const emailValidationSchema = z.object({
  email: z
    .string()
    .email({ message: 'Geçersiz e-mail adresi.' })
    .nonempty({ message: 'E-mail alanı zorunludur.' }),
  subject: z.string().nonempty({ message: 'Konu başlığı boş bırakılamaz.' }),
  message: z.string().nonempty({ message: 'Mesaj alanı boş bırakılamaz.' }),
});

export default emailValidationSchema;
