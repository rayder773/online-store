import React from 'react';
import { ItemsServiceConsumer } from '../item-service-context';

const withItemsService = () => (Wrapped) => {

  return (props) => {
    return (
      <ItemsServiceConsumer>
        {
          (itemService) => {
            return (<Wrapped {...props}
              itemService={itemService}/>);
          }
        }
      </ItemsServiceConsumer>
    );
  }
};

export default withItemsService;
