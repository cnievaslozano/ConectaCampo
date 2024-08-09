import Layout from '../components/Layout';
import '../styles/App.css';
import '../styles/fonts.css';
import '../styles/home.css';
import imagenLanding from '../assets/fondo.webp'
import Button from '../components/Button';
import CarouselHome from '../components/CarouselHome';

const Home = () => {
    return (
        <Layout>
            <section className='mt-8 text-center grid grid-cols-2'>
                <div className='container'>
                    <h1 className='mb-3 text-3xl text-darkGreen2 font-bold'>Agricultura Local</h1>
                    <h3 className='mt-4 mb-3 text-xl'>Apoya a los agricultores locales y reduce el desperdicio de alimentos</h3>
                    <p>
                        Conecta directamente con los productores de tu zona para aprovechar el sabor de nuestra tierra, que es lo mejor que tenemos.
                    </p>
                    <div className='mt-3 flex items-center'>
                        <Button text="Empieza ahora" className="p-2" />
                        <p className='text-gray-600'>Disfruta de la mejor calidad respetando el medioambiente!</p>
                    </div>
                </div>
                <div className='fondo-img'>
                    <img src={imagenLanding} alt="" />
                </div>
            </section>

            <section>
                <CarouselHome />
            </section>

            <section className='fond'>
                <div className='border h-3/4 rounded-lg bg-darkGreen1 shadow-xl opacity-80 border-gray'>

                </div>
            </section>

            <div className='flex justify-center'>
                <div className='w-40 h-40 rounded-full bg-darkGreen1 flex justify-center self-center items-center text-white'>darkGreen1</div>
                <div className='w-40 h-40 rounded-full bg-darkGreen2 flex justify-center self-center items-center text-white'>darkGreen1</div>
                <div className='w-40 h-40 rounded-full bg-lightGreen1 flex justify-center self-center items-center text-white'>lightGreen1</div>
                <div className='w-40 h-40 rounded-full bg-lightGreen2 flex justify-center self-center items-center text-white'>lightGreen2</div>
                <div className='w-40 h-40 rounded-full bg-lightGreen3 flex justify-center self-center items-center text-white border-8'>lightGreen3</div>

            </div>



        </Layout>
    )
}

export default Home;