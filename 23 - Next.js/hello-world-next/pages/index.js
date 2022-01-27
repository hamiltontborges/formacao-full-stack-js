import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Link href="/about">
                <a>Sobre</a>
            </Link>
            <br></br>
            <Link href="/category/products">
                <a>Produtos</a>
            </Link>
        </div>
    )
}

export default Index