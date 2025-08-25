import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/diego3g.png",
            name: "Diego Fernandes",
            role: "CTO @Rocketseat",
        },
        content: [
            { type: "paragraph", content: "Fala pessoal 👋" },
            {
                type: "paragraph",
                content:
                    "Finalizei o novo desafio do Ignite! Um sistema de feedback com autenticação e um dashboard incrível.",
            },
            {
                type: "paragraph",
                content:
                    "O projeto foi desenvolvido do zero, explorando as novas features do React Router Dom v6 e Context API. Curti demais o resultado 🚀",
            },
            { type: "link", content: "https://ignite.rocketseat.com.br/feedback-app" },
            { type: "link", content: "#novoprojeto" },
            { type: "link", content: "#reactjs" },
            { type: "link", content: "#ignite" },
        ],
        publishedAt: new Date("2025-08-22 10:00:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/maykbrito.png",
            name: "Mayk Brito",
            role: "Educator @Rocketseat",
        },
        content: [
            { type: "paragraph", content: "E aí, devs! Tudo certo? 🤘" },
            {
                type: "paragraph",
                content:
                    "Acabei de postar no meu canal do YouTube um vídeo sobre como estruturar projetos React de forma profissional, usando a arquitetura de features.",
            },
            {
                type: "paragraph",
                content:
                    "Aprenda a organizar seus componentes e a manter seu código limpo e escalável. Confiram lá! 👇",
            },
            { type: "link", content: "https://youtube.com/maykbrito" },
            { type: "link", content: "#youtube" },
            { type: "link", content: "#coding" },
            { type: "link", content: "#clean-code" },
        ],
        publishedAt: new Date("2025-08-23 15:30:00"),
    },
    {
        id: 3,
        author: {
            avatarUrl: "https://github.com/filipedeschamps.png",
            name: "Filipe Deschamps",
            role: "Tech YouTuber",
        },
        content: [
            { type: "paragraph", content: "Olá, pessoal! 👋" },
            {
                type: "paragraph",
                content:
                    "Saiu mais uma newsletter completa sobre o mundo da programação. Abordei as últimas novidades em IA, frameworks e a crise das startups de tecnologia.",
            },
            { type: "paragraph", content: "Não percam as próximas edições, assinem o link abaixo! 🗞️" },
            { type: "link", content: "https://filipe.deschamps.com.br/newsletter" },
            { type: "link", content: "#newsletter" },
            { type: "link", content: "#devnews" },
            { type: "link", content: "#tecnologia" },
        ],
        publishedAt: new Date("2025-08-24 09:15:00"),
    },
    {
        id: 4,
        author: {
            avatarUrl: "https://github.com/jakeliny.png",
            name: "Jakeliny Gracielly",
            role: "Frontend Engineer",
        },
        content: [
            { type: "paragraph", content: "Que tal um desafio? 💡" },
            {
                type: "paragraph",
                content:
                    "Criei um pequeno projeto de landing page para testar suas habilidades em HTML e CSS. A ideia é replicar o layout e fazer a página ser totalmente responsiva.",
            },
            { type: "paragraph", content: "O código já está no meu GitHub. Quem topa?" },
            { type: "link", content: "https://github.com/jakeliny/challenge-landpage" },
            { type: "link", content: "#desafiocss" },
            { type: "link", content: "#html" },
            { type: "link", content: "#webdev" },
        ],
        publishedAt: new Date("2025-08-25 12:45:00"),
    },
    {
        id: 5,
        author: {
            avatarUrl: "https://github.com/gabrielmkt.png",
            name: "Gabriel Marques",
            role: "Developer Advocate",
        },
        content: [
            { type: "paragraph", content: "Fala, galera! ⚡️" },
            {
                type: "paragraph",
                content:
                    "Participei de um podcast muito irado sobre as tendências do mercado de trabalho para desenvolvedores. Compartilhei algumas dicas sobre como se destacar e quais tecnologias estão em alta.",
            },
            { type: "paragraph", content: "O link para o episódio completo está na bio. Aproveitem! 🎧" },
            { type: "link", content: "https://linktr.ee/gabrielmarquesdev" },
            { type: "link", content: "#podcast" },
            { type: "link", content: "#carreira" },
            { type: "link", content: "#tech" },
        ],
        publishedAt: new Date("2025-08-25 16:30:00"),
    },
];

function App() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main>
                    {posts.map((post) => {
                        return <Post author={post.author} content={post.content} publishedAt={post.publishedAt} />;
                    })}
                </main>
            </div>
        </>
    );
}

export default App;
