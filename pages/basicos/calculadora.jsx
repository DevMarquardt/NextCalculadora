import BotoesComponent from "../../components/BotoesComponent";

export default function calculadora() {
    return (
        <>
            <header>

                <div className="bg-black flex justify-center h-14 items-center">
                    <h1 className="text-white">
                        Calculadora
                    </h1>
                </div>

            </header>
            <body className="bg-slate-600">
                <BotoesComponent />
            </body>
        </>
    )
}