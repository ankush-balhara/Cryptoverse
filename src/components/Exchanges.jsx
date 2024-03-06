import React, { useState } from "react";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col,  Typography } from "antd";
// import {  Option } from 'antd/es/select';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  ThunderboltOutlined,
  NumberOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
const { Title, Text } = Typography;


const CryptoDetails = () => {
  const { uuid } = useParams();
  const [timePeriod, setTimePeriod] = useState("7d");
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);



  if (isFetching) {
    // return <Loader />;
    console.log("Loading crypto details");
    
  }
  // console.log(data);
  
  const cryptoDetails = data?.data?.coin;
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  
  

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    {
      title: "change",
      value: `$ ${cryptoDetails?.change && millify(cryptoDetails?.change)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${millify(cryptoDetails?.allTimeHigh.price)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${millify(cryptoDetails?.supply.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <Col className="coin-details-container">
      <Col className="coin-heading-container">
        <Title className="coin-name">
          {/* {cryptoDetails.name}({cryptoDetails.symbol})*/}

          {cryptoDetails && (
            <>
              {cryptoDetails.name}({cryptoDetails.symbol})
            </>
          )}
        </Title>
       
      </Col>
      {/* **********Select Feild*********** */}
      <select
        className="select-timeperiod"
        value={timePeriod}
        onChange={(event) => setTimePeriod(event.target.value)}
      >
        {time.map((date) => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>

      {/*  *********Line Chart******** */}
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Value Statistics
            </Title>
            <p>An overview showing the stats of {cryptoDetails?.name}</p>
          </Col>
          {genericStats?.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      {/*  *********others stats Chart******** */}
      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other  Statistics
            </Title>
            <p>An overview showing the stats of all cryptocurrencies</p>
          </Col>
          {stats?.map(({ icon, title, value }) => (
            <Col className="coin-stats">
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
