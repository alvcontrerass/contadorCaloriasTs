import {categories} from "../data/categories"

export default function Form() {
  return (
    <form action="" className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categoria:</label>
            <select name="category" id="category" className=" border border-slate-300 p-2 rounded-lg w-full bg-white">
                {categories.map(category => (
                    <option value={category.id} key={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="activity" className="font-bold">Actividad:</label>
            <input type="text" id="activity" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de naranja, Ejercicio, Pesas, Caminata"/>
        </div>

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calorias:</label>
            <input type="number" id="calories" className="border border-slate-300 p-2 rounded-lg" placeholder="Cantidad de calorias"/>
        </div>

        <input type="submit" className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer" value="Guardar Comida o Ejercicio" />
    </form>
  )
}
