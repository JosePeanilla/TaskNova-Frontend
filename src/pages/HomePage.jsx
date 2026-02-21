export default function HomePage() {
    return (
        <div className="min-h-screen p-6">
            <div className="max-w-3x1 mx-auto">
                <h1 className="text-3x1 font-bold">TaskNova</h1>
                <p className="opacity-70 mt-2">Tus tareas simplificadas</p>

                <div className="mt-6 card bg-base-100 shadow">
                    <div className="card-body">
                        <p className="opacity-70">
                            Siguiente paso: enrutador + diseño + interfaz de usuario de tareas.
                        </p>
                        <button className="btn btn-primary w-fit">¡Vamos!</button>
                    </div>
                </div>
            </div>
        </div>
  );
}   
