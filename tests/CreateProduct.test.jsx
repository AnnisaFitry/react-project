import { render, screen, fireEvent } from '@testing-library/react';
import { it } from 'vitest';
import CreateProduct from "../src/pages/CreateProduct";


describe('Create Product', () => {
  it('renders headline', () => {
    render(<CreateProduct />);
    const headline = screen.getByText(/Create Product/i);
    expect(headline).toBeInTheDocument();
  });
  it('render input product name', () => {
    render(<CreateProduct />);
    const productnameInput = screen.getByLabelText('Product Name:');
    fireEvent.change(productnameInput, { target: { value: 'Sample Product' } });
    expect(productnameInput).toHaveValue('Sample Product');
  })
  it('render selects product category', () => {
    render(<CreateProduct />);
    const productCategorySelect = screen.getByLabelText('Product Category:');
    fireEvent.change(productCategorySelect, { target: { value: 'Electronic' } });
    expect(productCategorySelect).toHaveValue('Electronic');
  });

  it('render selects product freshness', () => {
    render(<CreateProduct />);
    const brandNewRadio = screen.getByLabelText('Brand New');
    const secondHandRadio = screen.getByLabelText('Second Hand');
    const refurbishedRadio = screen.getByLabelText('Refurbished');

    fireEvent.click(brandNewRadio);
    expect(brandNewRadio).toBeChecked();
    expect(secondHandRadio).not.toBeChecked();
    expect(refurbishedRadio).not.toBeChecked();

    fireEvent.click(secondHandRadio);
    expect(brandNewRadio).not.toBeChecked();
    expect(secondHandRadio).toBeChecked();
    expect(refurbishedRadio).not.toBeChecked();

    fireEvent.click(refurbishedRadio);
    expect(brandNewRadio).not.toBeChecked();
    expect(secondHandRadio).not.toBeChecked();
    expect(refurbishedRadio).toBeChecked();
  });
  it('render input additional description', () => {
    render(<CreateProduct />);
    const additionaldescriptionInput = screen.getByLabelText('Additional Description');
    fireEvent.change(additionaldescriptionInput, { target: { value: 'none' } });
    expect(additionaldescriptionInput).toHaveValue('none');
  });
  it('render input product price', () => {
    render(<CreateProduct />);
    const productpriceInput = screen.getByLabelText('Product price:');
    fireEvent.change(productpriceInput, { target: { value: '10000' } });
    expect(productpriceInput).toHaveValue('10000');
  });

  it('validates product name does not contain invalid characters', () => {
    render(<CreateProduct />);
    const productnameInput = screen.getByLabelText('Product Name:');
    fireEvent.change(productnameInput, { target: { value: 'Product@Name' } });
    fireEvent.blur(productnameInput);
    const validationMessage = screen.getByText('Name must not contain symbols.');
    expect(validationMessage).toBeInTheDocument();
  });

  it('validates product name does not exceed 25 characters', () => {
    render(<CreateProduct />);
    const productnameInput = screen.getByLabelText('Product Name:');
    fireEvent.change(productnameInput, { target: { value: 'This is a very long product name that exceeds 25 characters' } });
    fireEvent.blur(productnameInput);
    const validationMessage = screen.getByText('Product Name must not exceed 25 characters.');
    expect(validationMessage).toBeInTheDocument();
  });

  it('validates all form fields are required', () => {
    render(<CreateProduct />);
    const productnameInput = screen.getByLabelText('Product Name:');
    const productCategorySelect = screen.getByLabelText('Product Category:');
    const additionalDescriptionTextarea = screen.getByLabelText('Additional Description');
    const productPriceInput = screen.getByLabelText('Product price:');

    fireEvent.change(productnameInput, { target: { value: 'test' } });
    fireEvent.change(productnameInput, { target: { value: '' } });
    fireEvent.blur(productnameInput);
    const productNameValidationMessage = screen.getByText('please fill in the product name');
    expect(productNameValidationMessage).toBeInTheDocument();

    fireEvent.change(productCategorySelect, { target: { value: 'Electronic' } });
    fireEvent.change(productCategorySelect, { target: { value: '' } });
    fireEvent.blur(productCategorySelect);
    const productCategoryValidationMessage = screen.getByText('The product category field must be selected.');
    expect(productCategoryValidationMessage).toBeInTheDocument();

    fireEvent.change(additionalDescriptionTextarea, { target: { value: 'none' } });
    fireEvent.change(additionalDescriptionTextarea, { target: { value: '' } });
    fireEvent.blur(additionalDescriptionTextarea);
    const additionalDescriptionValidationMessage = screen.getByText('The additional description field must be filled in.');
    expect(additionalDescriptionValidationMessage).toBeInTheDocument();

    fireEvent.change(productPriceInput, { target: { value: '10000' } });
    fireEvent.change(productPriceInput, { target: { value: '' } });
    fireEvent.blur(productPriceInput);
    const productPriceValidationMessage = screen.getByText('please fill in the product price.');
    expect(productPriceValidationMessage).toBeInTheDocument();
  });
});