import Link from 'next/link' // Ayuda a pintar por pantalla otro elemento con otra ruta sin actualizar la pag

export default function Home() {
  return (
    <div>
      <h1>Hola Mundo!</h1>
      <Link href="/products/create">Crear Producto</Link>
    </div>
  )
}
