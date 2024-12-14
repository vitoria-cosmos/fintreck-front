import HeaderDash from '../../components/HeaderDash';
import './dashboard.css';
import { FaTrashAlt } from "react-icons/fa";

import { FiPlusCircle } from "react-icons/fi";
export default function Dashboard() {
    return (
        <>
        <HeaderDash/>
        <main className='dashboard_container'>
            <div className='dashboard_container_cards'>
                <section className='balance_container'>
                    <h1>Balance: R$ 90,00</h1>
                    <span>Total Income: R$ 2507,00</span>
                    <span>Total Expenses: R$ 2047,50</span>
                </section>
                <section className='cards_container'>
                    <div className='income_container'>
                        <h2 className='titulo_cards'>Incomes</h2>
                        <div className='income_cards'>
                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>

                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>

                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>

                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>
                        </div>
                    </div>

                    <div className='expensive_container'>
                        <h2 className='titulo_cards'>Expenses</h2>
                        <div className='expensive_cards'>
                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>

                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>

                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>

                            <div className='card'>
                                <div className='card_trash'>
                                    <span>Título: Salário</span>
                                    <FaTrashAlt style={{color: 'red'}}/>
                                </div>
                                <span>Valor: R$ 2,00</span>
                                <span>Data de recebimento: 2024-01-01</span>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <FiPlusCircle style={{color: 'green', cursor: 'pointer', fontSize: '3em', position: 'fixed', bottom: '2em', right: '.5em'}}/>
            
        </main>
        
        </>

    )
}