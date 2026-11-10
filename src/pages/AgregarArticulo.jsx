import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useInventario } from '../context/InventarioContext';
import { CATEGORIAS } from '../data/inventarioInicial';

const FORM_VACIO = { nombre: '', categoria: '', precio: '', stock: '', descripcion: '' };

// Formulario para agregar artículos al inventario
export default function AgregarArticulo() {
  const { agregarArticulo } = useInventario();
  const navigate = useNavigate();
  const [form, setForm] = useState(FORM_VACIO);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.categoria || !form.precio || form.stock === '') {
      setError('Completa todos los campos obligatorios.');
      return;
    }
    agregarArticulo({
      nombre: form.nombre,
      categoria: form.categoria,
      precio: Number(form.precio),
      stock: Number(form.stock),
      descripcion: form.descripcion,
    });
    navigate('/articulos');
  };

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="titulo-pagina">Agregar artículo</h1>

      <form onSubmit={handleSubmit} className="tarjeta space-y-4 p-6">
        <div>
          <label htmlFor="nombre" className="etiqueta-form">Nombre *</label>
          <input id="nombre" name="nombre" value={form.nombre} onChange={handleChange} className="input-form" />
        </div>

        <div>
          <label htmlFor="categoria" className="etiqueta-form">Categoría *</label>
          <select id="categoria" name="categoria" value={form.categoria} onChange={handleChange} className="input-form">
            <option value="">Selecciona...</option>
            {CATEGORIAS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="precio" className="etiqueta-form">Precio *</label>
            <input id="precio" name="precio" type="number" min="1" value={form.precio} onChange={handleChange} className="input-form" />
          </div>
          <div>
            <label htmlFor="stock" className="etiqueta-form">Stock *</label>
            <input id="stock" name="stock" type="number" min="0" value={form.stock} onChange={handleChange} className="input-form" />
          </div>
        </div>

        <div>
          <label htmlFor="descripcion" className="etiqueta-form">Descripción</label>
          <textarea id="descripcion" name="descripcion" rows="3" value={form.descripcion} onChange={handleChange} className="input-form" />
        </div>

        {error && <p className="error-form">{error}</p>}

        <Button type="submit">Guardar artículo</Button>
      </form>
    </div>
  );
}
