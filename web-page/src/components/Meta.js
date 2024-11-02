import Head from 'next/head'

const Meta = ({title, keywords, discription}) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name={'keywords'} content={keywords}/>
            <meta name='description' content={discription}/>
            <meta charSet='utf-8'/>
            <link rel='icon' href='/favicon.ico'/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'WebDev news',
    keywords: 'Web Development , Programming',
    discription: 'Get the Lastest news on the web'
}

export default Meta