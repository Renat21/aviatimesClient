import React from 'react';
import styled from 'styled-components';
import cursor from '../../../assets/images/cursor/hand.png';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
  }
  

  handleChange = (e) => {
    var help = this.props.stops;
    help[this.props.value] = {text: this.props.text, value: this.props.value, checked:  !help[this.props.value].checked}
    this.props.setStops(help);
  }

  render() {
    return (
      <Container>
        {this.props.text}
        
        <input type="checkbox"
              value={this.props.value}
              disabled={this.props.disabled} 
              onChange={this.handleChange} />
        <Checkmark/>
      </Container>
    );
  }
};


export default CheckBox;

// Стиль коробки
const Checkmark = styled.div`
// flex необходим для центрирования галочки в центре коробки
display: flex;
justify-content: center;
align-items: center;

// Коробка прижата к левому краю
position: absolute;
left: 0;

// Размер коробки
height: 19px;
width: 19px;

// Цвет коробки (когда галочка не отмечена)
background-color: transparent;
border: 1px solid #d2d5d6;
border-radius: 3px;

// Стиль галочки
&:after {
  content: '';
  display: none;
  width: 4px;
  height: 8px;
  border: solid #2196f3;
  border-width: 0 1px 1px 0;
  transform: rotate(45deg);
}
`;

const Container = styled.label`

  display: flex;
  align-items: center;
 
  position: relative;

  padding-left: 32px;

  color: #4a4a4a;
  font-size: 14px;

  cursor: url(${cursor}), pointer;

  white-space: nowrap;
  
  > input[type="checkbox"] {
    display: none;
  }

  // Hover - цвет границы коробки при условии, что элемент активен и нет галочки
  input[type="checkbox"]:not(:disabled):not(:checked):hover + ${Checkmark} {
    border-color: #2196f3;
  }

  // Checked - цвет границы коробки
  > input[type="checkbox"]:checked + ${Checkmark} {
    border-color: #2196f3;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);
  }

  // Checked - отображаем галочку
  > input[type="checkbox"]:checked + ${Checkmark}:after {
    display: block;
  }

  // Disabled - цвет границы коробки
  > input[type="checkbox"]:disabled + ${Checkmark} {
    border-color: #d2d5d6;
  }

  // Disabled - цвет галочки
  > input[type="checkbox"]:disabled + ${Checkmark}:after {
    border-color: #d2d5d6;
  }
`;