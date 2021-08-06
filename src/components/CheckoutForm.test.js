import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.queryByText('Checkout Form')
    expect(header).toBeInTheDocument();
    expect(header).toBeTruthy();
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = screen.queryByLabelText('First Name:')
    userEvent.type(firstName, 'Mike');
    expect(firstName).toHaveValue('Mike');

    const lastName = screen.queryByLabelText('Last Name:');
    userEvent.type(lastName, 'Guerrero');
    expect(lastName).toHaveValue('Guerrero');

    const address = screen.queryByLabelText('Address:');
    userEvent.type(address, '9020 169th Street');
    expect(address).toHaveValue('9020 169th Street');

    const city = screen.queryByLabelText('City:');
    userEvent.type(city, 'Jamaica');
    expect(city).toHaveValue('Jamaica');

    const state = screen.queryByLabelText('State:');
    userEvent.type(state, 'NY');
    expect(state).toHaveValue('NY');

    const zip = screen.queryByLabelText('Zip:');
    userEvent.type(zip, '11432');
    expect(zip).toHaveValue('11432');

    const submit = screen.getByRole("button");
    userEvent.click(submit);
    
    const successMessage = screen.queryByTestId('successMessage').textContent

    
    expect(successMessage).toBeInTheDocument;
    


});
