import { useEffect, useState } from "react";
import { Card } from "@tremor/react";



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

  //returnig the structured data of newsfeed

  return (

    <div className="flex justify-center items-center">
      <Card className="max-w-3xl" decoration="top" >
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 bg-blue-500">
            <h2 className="flex justify-center items-center text-2xl font-bold text-white" decoration="end">News Feed API</h2>
          </div>
          <div className="p-4">
            {articles.slice(0, 2).map((item) => (
              <div key={item.url} className="bg-white shadow-lg rounded-lg overflow-hidden mb-4">
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-2">{item.author}</p>
                  <div className="flex items-center space-x-3 mb-2">
                    <div>
                      <p className="text-gray-600 font-bold">{item.source.id}</p>
                      <p className="text-gray-400 mb-2">{item.source.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Card>

    </div>




  );

}

export default DashNewsFeed;
