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
import { useSnackbar } from '../../context/SnackbarContext';

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
  const { openSnackbar } = useSnackbar();

  const handleChange = (prop, value) => {
    const newProd = { ...product };
    newProd[prop] = value;
    setProduct(newProd);
  };

  useEffect(() => {
    const getProductData = async () => {
      try {
        const productData = await productService.getProductById(id);
        productData.category = productData.category.name;
        setProduct(productData);
        return productData;
      } catch (e) {
        openSnackbar('Error obteniendo los datos del producto', 'error');
      }
    };

    const getCategories = async () => {
      try {
        const categoriesData = await categoryService.getAll();
        setCategories(categoriesData);
        return categoriesData;
      } catch (e) {
        openSnackbar('Error obteniendo las categorias', 'error');
      }
    };

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
  }, [id, product, openSnackbar]);

  const handleSubmit = async () => {
    try {
      const formatedProduct = {
        ...product,
        category: categories.find(categories => categories.name === product.category)
      };

      if (id) await productService.update(formatedProduct);
      else await productService.add(formatedProduct);

      navigate(getRoute(ROUTES.HOME));
    } catch (e) {
      openSnackbar('Error guardando los datos del producto', 'error');
    }
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
