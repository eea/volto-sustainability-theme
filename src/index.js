import React from 'react';
import './slate-inline-styles.less';
import { Icon } from '@plone/volto/components';
import subTextSVG from '@plone/volto/icons/subtext.svg';
import boldSVG from '@plone/volto/icons/bold.svg';

const applyConfig = (config) => {
  // CORS Allowed Destinations
  config.settings.allowed_cors_destinations = [
    ...(config.settings.allowed_cors_destinations || []),
    'www.eea.europa.eu',
  ];

  // Custom block styles
  config.settings.pluggableStyles = [
    ...(config.settings.pluggableStyles || []),

    {
      id: 'blue-subtitle',
      title: 'Blue Subtitle',
      cssClass: 'blue-subtitle',
      previewComponent: () => {
        return (
          <Icon
            name={subTextSVG}
            size="60px"
            className="blue-subtitle align-icon-center "
          />
        );
      },
    },

    {
      id: 'grey-center-aligned-text',
      title: 'Grey Center Aligned Text',
      cssClass: 'grey-center-aligned-text',
      previewComponent: () => {
        return (
          <Icon
            name={subTextSVG}
            size="60px"
            className="grey-center-aligned-text align-icon-center"
          />
        );
      },
    },
    {
      id: 'blue-x-Large-center-aligned-text',
      title: 'Blue x-Large Center Aligned Text',
      cssClass: 'blue-x-Large-center-aligned-text',
      previewComponent: () => {
        return (
          <Icon
            name={boldSVG}
            size="60px"
            className="blue-x-Large-center-aligned-text align-icon-center"
          />
        );
      },
    },
    {
      id: 'bordered-layout',
      title: 'Bordered Layout',
      cssClass: 'bordered-layout',
      previewComponent: () => {
        return <div className="bordered-layout preset-preview"></div>;
      },
    },
  ];

  const available_colors = [
    '#bbdbec',
    '#9dc6d4',
    '#5a93aa',
    '#005d7b',
    '#003d53',
    '#ebefc6',
    '#bdd494',
    '#6bb535',
    '#1e8339',
    '#025e37',
    '#464b0b',
    '#b5c234',
    '#777b1a',
    '#f4f1bc',
    '#e1e070',
    '#0070ae',
    '#fce6dc',
    '#f39a86',
    '#e73d5c',
    '#b92f47',
    '#8e1206',
    '#fff6a6',
    '#ffe525',
    '#f7a600',
    '#b94b19',
    '#8d4107',
    '#000000',
    '#6f6f6e',
    '#929291',
    '#bcbcbc',
    '#e3e3e3',
    '#ffffff',
  ];
  config.blocks.blocksConfig['columnsBlock'] = {
    ...(config.blocks.blocksConfig['columnsBlock'] || {}),
    available_colors,
  };

  config.settings.available_colors = available_colors;

  //Inline-style Menu
  config.settings.slate = config.settings.slate || {};
  config.settings.slate.styleMenu = config.settings.slate.styleMenu || {};
  config.settings.slate.styleMenu.inlineStyles = [
    ...(config.settings.slate.styleMenu?.inlineStyles || []),

    { cssClass: 'white-text', label: 'White text' },
    // blue series
    { cssClass: 'blue-powder-text', label: 'Blue powder text' },
    { cssClass: 'blue-lightsteel-text', label: 'Blue lightsteel text' },
    { cssClass: 'blue-cadet-text', label: 'Blue cadet text' },
    { cssClass: 'blue-teal-text', label: 'Blue teal text' },
    { cssClass: 'blue-darkslate-text', label: 'Blue darkslate text' },
    // green series
    {
      cssClass: 'green-blanchedalmond-text',
      label: 'Green blanchedalmond text',
    },
    { cssClass: 'green-tan-text', label: 'Green tan text' },
    { cssClass: 'green-olivedrab-text', label: 'Green olivedrab text' },
    { cssClass: 'light-green-text', label: 'Light green text' },
    { cssClass: 'green-forest-text', label: 'Green forest text' },
    { cssClass: 'green-darkslate-text', label: 'Green darkslate text' },

    // army series
    { cssClass: 'army-darkolivegreen-text', label: 'Army darkolivegreen text' },
    { cssClass: 'army-yellowgreen-text', label: 'Army yellowgreen text' },
    { cssClass: 'army-olivedrab-text', label: 'Army olivedrab text' },
    { cssClass: 'army-moccasin-text', label: 'Army moccasin text' },
    { cssClass: 'army-khaki-text', label: 'Army khaki text' },

    //red series
    { cssClass: 'red-mistyrose-text', label: 'Red mistyrose text' },
    { cssClass: 'red-darksalmon-text', label: 'Red darksalmon text' },
    { cssClass: 'red-indian-text', label: 'Red indian text' },
    { cssClass: 'red-brown-text', label: 'Red brown text' },
    { cssClass: 'red-dark-text', label: 'Red dark text' },

    //orange set
    { cssClass: 'orange-mistyrose-text', label: 'Orange mistyrose text' },
    { cssClass: 'orange-pale-text', label: 'Orange pale text' },
    { cssClass: 'orange-gold-text', label: 'Orange gold text' },
    { cssClass: 'orange-text', label: 'Orange text' },
    { cssClass: 'orange-sienna-text', label: 'Orange sienna text' },
    { cssClass: 'orange-saddle-text', label: 'Orange saddle text' },

    //black set
    { cssClass: 'black-text', label: 'Black text' },
    { cssClass: 'black-dimgray-text', label: 'Black dimgray text' },
    { cssClass: 'black-gray-text', label: 'Black gray text' },
    { cssClass: 'black-silver-text', label: 'Black silver text' },
    { cssClass: 'black-gainsboro-text', label: 'Black gainsboro text' },

    { cssClass: 'blue-text', label: 'Blue text' },
    { cssClass: 'red-text', label: 'Red text' },
    { cssClass: 'yellow-text', label: 'Yellow text' },
    { cssClass: 'grey-text', label: 'Grey text' },

    // font-sizes
    { cssClass: 'x-large', label: 'x-large' },
    { cssClass: 'xx-large', label: 'xx-large' },
    { cssClass: 'xxx-large', label: 'xxx-large' },
  ];

  return config;
};

export default applyConfig;
