import'./header.css';
import Logo from '../../Assets/logoPage.svg';


export default function Header (){
    return (

        <header>

            <img src={Logo} width={116} height={115} alt='imagem'/>

            <nav>
                <ul>
                    <li>SOBRE</li>
                    <li>PRODUTOS</li>
                    <li>CARRINHO</li>
                </ul>
            </nav>

            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M34.8599 21.96C34.9399 21.32 34.9999 20.68 34.9999 20C34.9999 19.32 34.9399 18.68 34.8599 18.04L39.0799 14.74C39.4599 14.44 39.5599 13.9 39.3199 13.46L35.3199 6.54C35.1399 6.22 34.7999 6.04 34.4399 6.04C34.3199 6.04 34.1999 6.06 34.0999 6.1L29.1199 8.1C28.0799 7.3 26.9599 6.64 25.7399 6.14L24.9799 0.84C24.9199 0.36 24.4999 0 23.9999 0H15.9999C15.4999 0 15.0799 0.36 15.0199 0.84L14.2599 6.14C13.0399 6.64 11.9199 7.32 10.8799 8.1L5.89992 6.1C5.77992 6.06 5.65992 6.04 5.53992 6.04C5.19992 6.04 4.85992 6.22 4.67992 6.54L0.679923 13.46C0.419923 13.9 0.539923 14.44 0.919923 14.74L5.13992 18.04C5.05992 18.68 4.99992 19.34 4.99992 20C4.99992 20.66 5.05992 21.32 5.13992 21.96L0.919923 25.26C0.539923 25.56 0.439923 26.1 0.679923 26.54L4.67992 33.46C4.85992 33.78 5.19992 33.96 5.55992 33.96C5.67992 33.96 5.79992 33.94 5.89992 33.9L10.8799 31.9C11.9199 32.7 13.0399 33.36 14.2599 33.86L15.0199 39.16C15.0799 39.64 15.4999 40 15.9999 40H23.9999C24.4999 40 24.9199 39.64 24.9799 39.16L25.7399 33.86C26.9599 33.36 28.0799 32.68 29.1199 31.9L34.0999 33.9C34.2199 33.94 34.3399 33.96 34.4599 33.96C34.7999 33.96 35.1399 33.78 35.3199 33.46L39.3199 26.54C39.5599 26.1 39.4599 25.56 39.0799 25.26L34.8599 21.96ZM30.8999 18.54C30.9799 19.16 30.9999 19.58 30.9999 20C30.9999 20.42 30.9599 20.86 30.8999 21.46L30.6199 23.72L32.3999 25.12L34.5599 26.8L33.1599 29.22L30.6199 28.2L28.5399 27.36L26.7399 28.72C25.8799 29.36 25.0599 29.84 24.2399 30.18L22.1199 31.04L21.7999 33.3L21.3999 36H18.5999L18.2199 33.3L17.8999 31.04L15.7799 30.18C14.9199 29.82 14.1199 29.36 13.3199 28.76L11.4999 27.36L9.37992 28.22L6.83992 29.24L5.43992 26.82L7.59992 25.14L9.37992 23.74L9.09992 21.48C9.03992 20.86 8.99992 20.4 8.99992 20C8.99992 19.6 9.03992 19.14 9.09992 18.54L9.37992 16.28L7.59992 14.88L5.43992 13.2L6.83992 10.78L9.37992 11.8L11.4599 12.64L13.2599 11.28C14.1199 10.64 14.9399 10.16 15.7599 9.82L17.8799 8.96L18.1999 6.7L18.5999 4H21.3799L21.7599 6.7L22.0799 8.96L24.1999 9.82C25.0599 10.18 25.8599 10.64 26.6599 11.24L28.4799 12.64L30.5999 11.78L33.1399 10.76L34.5399 13.18L32.3999 14.88L30.6199 16.28L30.8999 18.54ZM19.9999 12C15.5799 12 11.9999 15.58 11.9999 20C11.9999 24.42 15.5799 28 19.9999 28C24.4199 28 27.9999 24.42 27.9999 20C27.9999 15.58 24.4199 12 19.9999 12ZM19.9999 24C17.7999 24 15.9999 22.2 15.9999 20C15.9999 17.8 17.7999 16 19.9999 16C22.1999 16 23.9999 17.8 23.9999 20C23.9999 22.2 22.1999 24 19.9999 24Z" fill="white"/>
            </svg>
        </header>
    )
}