import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ROUTES, { getRoute } from '../../pages/routes';
import categoryService from '../../services/categoryService';
import productService from '../../services/productService';
import { FormButton } from '../FormInput/FormButton/FormButton';
import { FormDeleteButton } from '../FormInput/FormDeleteButton/FormDeleteButton';
import { FormInput } from '../FormInput/FormInput';
import {
  ButtonContainer,
  FormContainer,
  ManageProductContainer
} from './ManageProduct.styles';

export const ManageProduct = ({ id = null }) => {
  const [titles, setTitles] = useState([]);
  const [product, setProduct] = useState({
    id: 0,
    title: '',
    description: '',
    price: 0.0,
    additionalInfo: '',
    stock: 0,
    featured: false,
    category: '',
    images: []
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleChange = (prop, value) => {
    const newProd = { ...product };
    newProd[prop] = value;
    setProduct(newProd);
    console.log('newProd: ', newProd);
  };

  const getProductData = async () => {
    const productData = await productService.get(id);
    productData.category = productData.category.name;
    setProduct(productData);
    return productData;
  };
  const getCategories = async () => {
    const categoriesData = await categoryService.getAll();
    setCategories(categoriesData);
    return categoriesData;
  };

  useEffect(() => {
    const updateData = async () => {
      const categoriesData = await getCategories();
      let productData = { ...product };
      if (id) productData = await getProductData();
      setTitles([
        {
          label: 'Imagen',
          type: 'image',
          state: 'images',
          value: productData.images
        },
        { label: 'Titulo', state: 'title', value: productData.title },
        {
          label: 'Descripcion',
          state: 'description',
          value: productData.description
        },
        {
          label: 'Precio',
          type: 'number',
          state: 'price',
          value: productData.price
        },
        {
          label: 'Informacion adicional',
          state: 'additionalInfo',
          value: productData.additionalInfo
        },
        { label: 'Stock', type: 'number', state: 'stock', value: productData.stock },
        {
          label: 'Destacado',
          type: 'switch',
          state: 'featured',
          value: productData.featured
        },
        {
          label: 'Categoria',
          type: 'select',
          state: 'category',
          value: productData.category,
          options: categoriesData.map(category => category.name),
          defaultMsg: 'No se encontraron categorías'
        }
      ]);
    };
    updateData();
  }, []);

  const handleSubmit = async () => {
    const formatedProduct = {
      ...product,
      category: categories.find(categories => categories.name === product.category)
    };
    console.log('product: ', formatedProduct);
    if (id) await productService.update(formatedProduct);
    else await productService.add(formatedProduct);

    navigate(getRoute(ROUTES.HOME));
  };

  const handleDelete = async () => {
    await productService.delete(id);
    navigate(getRoute(ROUTES.HOME));
  };

  return (
    <ManageProductContainer>
      <FormContainer>
        {id && <FormDeleteButton text='Dar de baja' handleClick={handleDelete} />}
        {titles.map(({ label, state, type, defaultMsg, options, value }) => {
          return (
            <FormInput
              key={`Manage-product-formInput-${label}`}
              label={label}
              state={state}
              type={type}
              handleChange={handleChange}
              defaultMsg={defaultMsg}
              options={options}
              value={value}
            />
          );
        })}
        <ButtonContainer>
          <Link to={getRoute(ROUTES.HOME)}>
            <FormButton text='Cancelar' />
          </Link>
          <FormButton text='Guardar' handleClick={handleSubmit} />
        </ButtonContainer>
      </FormContainer>
    </ManageProductContainer>
  );
};
