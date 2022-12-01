import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import Bar from '../../components/TaxFreeStatisticsTable/Bar';
import Card from '../../components/TaxFreeStatisticsTable/Card';
import StatisticsSearch from '../../components/TaxFreeStatisticsTable/StatisticsSearch';
import TaxFreeStatisticsTable from '../../components/TaxFreeStatisticsTable/TaxFreeStatisticsTable'

const ProductFormalization = () => {
  return (
    <div className="container">
      <AppBar />
        <Bar/>
        <Card/>
        <StatisticsSearch/>
        <TaxFreeStatisticsTable/>
    </div>
  );
};

export default ProductFormalization;
