/**
 * analyticsConfig.js - Libro Aleja
 * Configuración de telemetría y privacidad exclusiva para Alejita
 */

export const analyticsConfig = {
  // PIN de seguridad para Aleja (14 de Abril = 1404)
  personalPin: '1404',
  authorPin: '2709',

  // Backend Firebase Realtime Database
  firebaseUrl: 'https://libro-lau-default-rtdb.firebaseio.com',
  projectKey: 'libro_aleja',

  sessionTimeoutMinutes: 30,
  syncIntervalMs: 15000,

  storageKeys: {
    visitorId: 'libro_aleja_vid',
    visitCount: 'libro_aleja_vcount',
    lastActive: 'libro_aleja_last_active',
    currentSession: 'libro_aleja_active_session',
    unlocked: 'libro_aleja_unlocked'
  }
};
