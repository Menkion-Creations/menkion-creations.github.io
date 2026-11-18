/* FUTURA INTEGRACIÓN, NO HABILITADA.
 * La web estática no tiene inicio de sesión real.
 * Para añadirlo se recomienda:
 * 1. Elegir proveedor de identidad (p. ej. Supabase Auth con OAuth PKCE).
 * 2. Mantener sesiones en cliente conforme a las guías oficiales del proveedor.
 * 3. Validar autorizaciones admin/user EN EL SERVIDOR y con políticas RLS.
 * 4. Nunca guardar service_role, claves secretas ni contraseñas en este repositorio.
 * 5. Antes de crear cuentas, publicar políticas de privacidad y condiciones.
 * Publicar solo las claves expresamente diseñadas para cliente (ej. anon/publishable)
 * y restringir tablas, storage y endpoints.
 */
export const auth = Object.freeze({ enabled: false, provider: null });
