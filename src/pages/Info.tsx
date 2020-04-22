import React, {useEffect, useState, Fragment} from 'react';
import styled from 'styled-components/native';
import api from '../services/api';
import Space from '../commons/Space';
import Scroll from '../commons/Scroll';

const Wrapper = styled.View`
  flex: 1;
  background: #0c8970;
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.View`
  width: 100%;
  height: 200px;
  background: white;
  border-bottom-right-radius: 70px;
  padding-horizontal: 20px;
`;

const Model = styled.Text`
  font-size: 50px;
  font-weight: bold;
`;

const Version = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #0c8970;
  text-align: left;
`;

const Loading = styled.ActivityIndicator``;

const DetailBody = styled.View`
  width: 100%;
  padding: 20px;
  flex-direction: column;
`;

const DetailText = styled.Text`
  color: #a9f3e4;
  margin-bottom: 2px;
`;

interface System {
  model?: string;
  version?: string;
}

interface Cpu {
  cores: number;
  governor: string;
  model: number;
  physicalCores: number;
  processors: number;
  speed: number;
  speedmax: number;
  speedmin: number;
  stepping: string;
  vendor: string;
}

const Home = () => {
  const [system, setSystem] = useState<System>({});
  const [cpu, setCpu] = useState<Cpu>({
    cores: 0,
    governor: '',
    model: 0,
    physicalCores: 0,
    processors: 0,
    speed: 0,
    speedmax: 0,
    speedmin: 0,
    stepping: '',
    vendor: '',
  });
  const [loading, setLoading] = useState(false);

  const getRasp = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/info/`);
      setSystem(res.data.system);
      setCpu(res.data.cpu);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getRasp();
  }, []);

  return (
    <Wrapper>
      <Header>
        {loading ? (
          <Loading />
        ) : (
          <Fragment>
            <Model>{system.model}</Model>
            <Version>Version: {system.version}</Version>
          </Fragment>
        )}
      </Header>
      <Space height={2} />
      <Scroll>
        <DetailBody>
          <DetailText>Cores: {cpu.cores}</DetailText>
          <DetailText>governor: {cpu.governor}</DetailText>
          <DetailText>model: {cpu.model}</DetailText>
          <DetailText>physicalCores: {cpu.physicalCores}</DetailText>
          <DetailText>processors: {cpu.processors}</DetailText>
          <DetailText>speed: {cpu.speed} Ghz</DetailText>
          <DetailText>speedmax: {cpu.speedmax} Ghz</DetailText>
          <DetailText>speedmin: {cpu.speedmin} Ghz</DetailText>
          <DetailText>stepping: {cpu.stepping}</DetailText>
          <DetailText>vendor: {cpu.vendor}</DetailText>
        </DetailBody>

        <Space height={30} />
      </Scroll>
    </Wrapper>
  );
};

Home.navigationOptions = {
  title: 'read',
};

export default Home;
