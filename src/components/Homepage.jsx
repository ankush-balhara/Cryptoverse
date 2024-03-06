import React from 'react'
import millify from 'millify';
import { Typography,Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import { useGetCryptosQuery } from '../services/cryptoApi';
import {Cryptocurrencies, News } from './indexExport';

const { Title } = Typography;
const Homepage = () => {
const { data, isFetching } = useGetCryptosQuery(10); 
  



console.log(data);

const globalStats = data?.data?.stats;

  if(isFetching)  return "Loading...";


  return (
   <div className='homepage'>
    <Title level={2} className='heading'>Global Crypto Stats</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats?.totalExchanges)} /></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats?.totalMarketCap)} /></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats?.totalMarkets)} /></Col>
      <Col span={12}><Statistic title="Total 24th Volume" value={millify(globalStats?.total24hVolume)} /></Col>
    </Row>

    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Top 10 Cryprocurrencies in the world</Title>
      <Title level={3} className='show-more' ><Link to="/cryptocurrencies">Show More</Link></Title>
    </div>

    <Cryptocurrencies simplified />
    <div className='home-heading-container'>
      <Title level={2} className='home-title'>Latest Crypto News</Title>
      <Title level={3} className='show-more' ><Link to="/news">Show More</Link></Title>
    </div>
    <News simplified />

   </div>
  )
}

export default Homepage
