import Layout from '../components/Layout';
import '../styles/App.css';
import '../styles/fonts.css';
import imagenLanding from '../assets/imagenLanding.jpg'
const Home = () => {
    return (
        <Layout>
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">La mejor plataforma para conectar a los productores agrícolas con los consumidores.</h2>
            </div>
            <div className='text-center grid grid-cols-2'>
                <div className='container'>
                    <h1 className='text-3xl text-darkGreen2 font-bold'>Agricultura Local</h1>
                    <h3 className='text-xl'>Apoya a los agricultores locales y reduce el desperdicio de alimentos</h3>
                    <p>
                        Conecta directamente con los productores de tu zona para aprovechar el sabor de nuestra tierra, que es lo mejor que tenemos.
                    </p>
                </div>

</div>

            <div className='fondo-img'>
                <img src={imagenLanding} alt="" />
            </div>

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