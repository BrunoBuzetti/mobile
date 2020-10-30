import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});

export default api;

/**
 * Aplicar no powershell
 *   Android con emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * Android con emulador: IP especifico http://10.0.2.2:3333 (Android Studio)
 * Android con dispositivo: IP da máquina
 */
