import React from "react";
import BotoesComponent from "../../components/BotoesComponent";



export default function calculadora() {
    
    return (
        <React.Fragment>
            <header>

                <div className="bg-black flex justify-center h-14 items-center">
                    <h1 className="text-white">
                        Calculadora
                    </h1>
                </div>

            </header>
            <main className=" bg-slate-500">
            < BotoesComponent />
            </main>

        </React.Fragment>
    )
}