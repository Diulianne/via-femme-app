import '@/styles/globals.css'; // Importa os estilos globais
import 'tailwindcss/tailwind.css'; // Opcional, se Tailwind não estiver incluído em globals.css
import 'mapbox-gl/dist/mapbox-gl.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
