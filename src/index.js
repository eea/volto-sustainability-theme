import React from 'react';
import './slate-inline-styles.less';

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
      id: 'environment-theme-bg',
      title: 'Environment Theme Header',
      viewComponent: (props) => {
        const themes =
          props?.metadata?.taxonomy_themes ||
          props?.properties?.taxonomy_themes;
        const theme = themes?.length ? themes[0]?.token || themes[0] : '';
        const url = theme
          ? `https://www.eea.europa.eu/themes/${theme}/theme_image/image_panoramic`
          : '';
        return (
          <div className="container-environment-theme">
            <div
              className="full-width environment-theme-bg"
              style={{ backgroundImage: `url(${url})` }}
            ></div>
            <div className="environment-theme-header">{props.children}</div>
          </div>
        );
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
