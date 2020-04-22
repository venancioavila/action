import React from 'react';
import styled from 'styled-components/native';
import Space from '../commons/Space';
import Scroll from '../commons/Scroll';
import Text from '../commons/Text';
import theme from '../theme';

const RowPinWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 5px;
`;

const PinWrapper = styled.View<Styles>`
  width: 48%;
  height: 80px;
  background: ${p => (p.color ? p.color : p.theme.gpioBackground)};
  border-radius: 3px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 10px;
`;

const Pin = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: white;
  border-color: ${p => p.theme.background};
  border-width: 5px;
  align-items: center;
  justify-content: center;
`;

interface Styles {
  color?: string;
}

const Gpio = () => (
  <Scroll background={theme.background}>
    <Space height={30} />
    <RowPinWrapper>
      <PinWrapper color={theme.gpioBackgroundRed}>
        <Text bold size={20} color={theme.dark}>
          3v3
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            1
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundRed}>
        <Pin>
          <Text size={20} color={theme.dark}>
            2
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          5v
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO2
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            3
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundRed}>
        <Pin>
          <Text size={20} color={theme.dark}>
            4
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          5v
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO3
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            5
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundGround}>
        <Pin>
          <Text size={20} color={theme.dark}>
            6
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO4
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            7
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            8
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO14
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper color={theme.gpioBackgroundGround}>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            9
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            10
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO15
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO17
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            11
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            12
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO18
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO27
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            13
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundGround}>
        <Pin>
          <Text size={20} color={theme.dark}>
            14
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO22
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            15
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            16
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO23
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper color={theme.gpioBackgroundRed}>
        <Text bold size={20} color={theme.dark}>
          3v3
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            17
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            18
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO24
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO10
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            19
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundGround}>
        <Pin>
          <Text size={20} color={theme.dark}>
            20
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO9
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            21
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            22
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO25
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO11
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            23
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            24
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO8
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper color={theme.gpioBackgroundGround}>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            25
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            26
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO7
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper color={theme.gpioBackgroundID}>
        <Text bold size={20} color={theme.dark}>
          ID_SD
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            27
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundID}>
        <Pin>
          <Text size={20} color={theme.dark}>
            28
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          ID_SC
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO5
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            29
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundGround}>
        <Pin>
          <Text size={20} color={theme.dark}>
            30
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO6
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            31
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            32
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO12
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO13
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            33
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper color={theme.gpioBackgroundGround}>
        <Pin>
          <Text size={20} color={theme.dark}>
            34
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO19
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            35
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            36
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO16
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper>
        <Text bold size={20} color={theme.dark}>
          GPIO26
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            37
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            38
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO20
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />

    <RowPinWrapper>
      <PinWrapper color={theme.gpioBackgroundGround}>
        <Text bold size={20} color={theme.dark}>
          Ground
        </Text>
        <Pin>
          <Text size={20} color={theme.dark}>
            39
          </Text>
        </Pin>
      </PinWrapper>

      <PinWrapper>
        <Pin>
          <Text size={20} color={theme.dark}>
            40
          </Text>
        </Pin>
        <Text bold size={20} color={theme.dark}>
          GPIO21
        </Text>
      </PinWrapper>
    </RowPinWrapper>
    <Space height={10} />
  </Scroll>
);

export default Gpio;
