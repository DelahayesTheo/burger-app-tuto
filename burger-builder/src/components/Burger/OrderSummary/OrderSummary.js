import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
	render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(igKey => {
				return (
					<li key={igKey}>
						<span style={{textTransform: 'capitalize'}}>{igKey}</span> : {this.props.ingredients[igKey]} 
					</li> );
		});
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>A delicious burger with the following elements :</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price: </strong> {this.props.totalPrice.toFixed(2)}</p>
				<p> Continue to Checkout ? </p>
				<Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
				<Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
			</Aux>
		);
	}	
}
export default OrderSummary;