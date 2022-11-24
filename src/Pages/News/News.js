import endpoint from "../../assets/data";
import { React, useState, useEffect } from "react";
import NewsCard from "../../Components/Card";

const News = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const fetchApi = async () => {
        const response = await fetch(endpoint);
        const resJson = await response.json();
        console.log(resJson.articles);
        setData(resJson.articles);
        console.log(data);
        // setQues(resJson.results);
      };
      fetchApi();
    }, []);




    return (
        <>
            {(
                <>
                    {data.map((item, key) => (
                        <NewsCard
                            key={key}
                            title={item.title}
                            desc={item.description}
                            url={item.url}
                            img={item.urlToImage}
                        />
                    ))}
                </>
            )}
        </>
    );
};

export default News;
