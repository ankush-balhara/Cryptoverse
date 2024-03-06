import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

//   // const demoImage = 'https://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg';
 

const News = ({ simplified , limit = 8}) => {
  const { data: cryptoNews, error } = useGetCryptoNewsQuery({
    newsCategory: 'CryptoCurrency',
    count: simplified ? 9 : 49,
  });
  console.log(cryptoNews);   

  if(!cryptoNews?.data) return 'Loading...';
  if (error) return 'Error loading';

  const newsToDisplay = simplified ? cryptoNews.data.slice(0, 9) : cryptoNews.data;
  
  return (
    <div>
      <Row gutter={[24,24]}>



        {newsToDisplay?.map((news,index)=>( 
          <Col xs={24} sm={12} lg={8} key={index}>
              <Card hoverable className="news-card">
              <a href={news.url} target='_blank' rel='noreferrer'>
                <div className='news-image-container'>
                <Title className="news-title" level={4}>{news.title}</Title>
                <img src={news?.thumbnail } alt="news" className='news-image-thumbnail' />
                </div>
                <p>
                  {news.description > 100 ? `${news.description.substring(0,100)}...`
                  : news.description }
                </p>
                <div className='provider-container'>
                <div>
                  <Avatar src='https://www.coindesk.com/pf/resources/images/logos/Coindesk_logo_396x75.svg?d=333'className='website-image' alt='news'/>
                  <Text>{moment(news.createdAt).startOf('ss').fromNow()}</Text>
                </div> </div>
              </a>
              </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default News;


