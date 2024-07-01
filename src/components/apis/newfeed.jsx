import { useEffect, useState } from "react";
import {
    Card
} from "@tremor/react";



/**
 *Fetching the news data from the newsapi.org API and displaying it in card components
 *
 * @return {*} 
 */
function DashNewsFeed() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            const apiKey = "2309499006b1495c9e68562c5992ba1b";
            const url = `https://newsapi.org/v2/top-headlines?country=ca&apiKey=${apiKey}`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                setArticles(data.articles.slice(0, 3));
            } catch (error) {
                console.error("Failed to fetch news", error);
            }
        };

        fetchNews();
    }, []);

    console.log("The News Article data::>>", articles);

    return (
        <Card className="max-w-3xl" decoration="top" decorationColor="blue">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="px-4 py-5 bg-blue-500">
        <h2 className="text-xl font-bold text-white">News Feed API</h2>
    </div>
    <div className="p-4">
        {articles.slice(0, 2).map((item) => (
            <div key={item.url} className="mb-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-700">{item.author}</p>
                <ul className="mt-4">
                    <li className="flex items-center space-x-4">
                        <svg className="h-5 w-5 text-sky-400" fill="currentColor" viewBox="0 0 20 20">mae
                        </svg>
                        <div>
                            <p className="font-bold truncate">{item.source.id}</p>
                            <p className="truncate">{item.source.name}</p>
                        </div>
                    </li>
                </ul>
            </div>
        ))}
    </div>
</div>
        </Card>
    );
}

export default DashNewsFeed;
