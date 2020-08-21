import React from "react";
import PromotionContainer from "../common/promotion/promotion-container";
import SliderGoodsContaner from "../common/slider-goods/slider-goods-container";
import Wrapper from "../common/wrapper/wrapper";
import { Space } from "antd";

import "./home.scss";

const proc = [
  {
    img: "https://ae01.alicdn.com/kf/H73a256ac749944d88ee72f2d78dbf01bw/Intel-Xeon-E5-2696v2-E5-2696-V2-2-5.jpg",
    name: "Процессор Intel Xeon E5 2696v2",
    price: 8003,
    path: "/components/processors/lga2011/2"
  },
  {
    img: "https://ae01.alicdn.com/kf/H9b19c4e333524808b6d903e513e02e703/Intel-Xeon-E5-2690-8-2-9.jpg",
    name: "Процессор Intel Xeon E5-2690",
    price: 4623,
    path: "/components/processors/lga2011/3"
  },
  {
    img: "https://ae01.alicdn.com/kf/Ha0ef80f9daee462cac6ddbc708932687s/Intel-Xeon-E5-2650-V3-SR1YA-2-3-10-105.jpg",
    name: "Процессор Intel Xeon E5 2650 V3 SR1YA",
    price: 6052,
    path: "/components/processors/v3/2"
  },
  {
    img: "https://ae01.alicdn.com/kf/Hc9ee5681057e44a4a2a5792cd34f2c1eh/Intel-Xeon-E5-2678-V3-2-5G.jpg",
    name: "Процессор Intel Xeon E5 2678 V3",
    price: 6360,
    path: "/components/processors/v3/3"
  },
  {
    img: "https://ae01.alicdn.com/kf/H6c419ad64dba455ba58f8f6e256a9c86j/Intel-Xeon-E5-2689-2-6-LGA-2011-SROL6.jpg",
    name: "Процессор Intel Xeon E5 2689",
    price: 3525,
    path: "/components/processors/lga2011/1"
  }
]

const mothers = [
  {
    img: "https://ae01.alicdn.com/kf/H553adaa7fe104bf3bb4de0f03e4ccf97Z/M-2-NVME-SSD-LGA2011-SATA3-0-PCI-E-ATX-USB3-0.jpg",
    name: "Материнская плата X79 P3",
    price: 7198,
    oldPrice: 7998,
    path: "/components/motherboards/lga2011/3"
  },
  {
    img: "https://ae01.alicdn.com/kf/Hfd40404107404c15ae71efdbbeb18bf49/LGA-2011-X79P-ATX-USB3-0-SATA3-PCI.jpg",
    name: "Материнская плата X79 P",
    price: 5802,
    oldPrice: 6470,
    path: "/components/motherboards/lga2011/4"
  },
  {
    img: "https://ae01.alicdn.com/kf/H76eded9db9be4537bfa33ee4b35b35c5u/LGA2011-X79-ATX-USB3-0-SATA3-PCI-E.jpg",
    name: "Материнская плата X79M-S 3.0",
    price: 5457,
    path: "/components/motherboards/lga2011/1"
  },
  {
    img: "https://ae01.alicdn.com/kf/Hf147b290a43e44f6b84b14592963f25bP/Jingsha-X99-D8-NVME-M-2-Wi-Fi-USB3.jpg",
    name: "Материнская плата X99 D8",
    price: 8639,
    oldPrice: 9598,
    path: "/components/motherboards/v3/1"
  },
  {
    img: "https://ae01.alicdn.com/kf/H952b213ace834e72aa58c42ef5caad8da/X99-D4-LGA-2011-V3-V4.jpg",
    name: "Материнская плата X99 D4",
    price: 5998,
    oldPrice: 7998,
    path: "/components/motherboards/lga2011/5"
  }
]

const promo1 = {
  name: "Процессоры LGA2011",
  description: "Купить процессоры на базе lga2011 по самым низким ценам с Aliexpress",
  img: "https://sun9-62.userapi.com/SB3qr7vtUmZpnxYdqUf0doTqLWWFM6SD69kjMA/fjSEZo2STjI.jpg",
  path: "components/processors/lga2011"
}

const Home = () => {
  return (
    <div className="home media1220">
      <Wrapper>
        <Space size={10} direction="vertical">
          <PromotionContainer data={promo1} />
          <SliderGoodsContaner name="Материнские платы" items={mothers} />
          <SliderGoodsContaner name="Процессоры" items={proc} />
        </Space>
      </Wrapper>
    </div>
  );
};

export default Home;