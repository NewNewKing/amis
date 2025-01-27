import React = require('react');
import {render, cleanup} from '@testing-library/react';
import '../../../src';
import {render as amisRender} from '../../../src';
import {makeEnv} from '../../helper';
import {clearStoresCache} from '../../../src';

afterEach(() => {
  cleanup();
  clearStoresCache();
});

test('Renderer:static', async () => {
  const {container} = render(
    amisRender(
      {
        type: 'form',
        title: 'The form',
        controls: [
          {
            type: 'static',
            name: 'static',
            label: 'label',
            value: 'static',
            description: 'static description',
            placeholder: '-',
            inline: true,
            className: 'bg-white'
          },
          {
            type: 'static',
            name: 'static 1',
            visible: true
          },
          {
            type: 'static',
            name: 'static 2',
            visibleOn: 'this.static'
          },
          {
            type: 'static',
            name: 'static 3',
            hidden: true
          },
          {
            type: 'static',
            name: 'static 4',
            hiddenOn: 'this.static'
          },
          {
            type: 'static',
            name: 'static 5',
            hiddenOn: 'this.static',
            inputClassName: 'padder-xs',
            labelClassName: 'font-bold',
            tpl: '<%= static tpl %>'
          }
        ],
        submitText: null,
        actions: []
      },
      {},
      makeEnv()
    )
  );
  expect(container).toMatchSnapshot();
});

test('Renderer:static', async () => {
  const {container} = render(
    amisRender(
      {
        type: 'form',
        title: 'The form',
        static: true,
        data: {
          a: 1,
          b: 2,
          c: 3,
          d: 4
        },
        body: [
          {
            type: 'input-text',
            name: 'a',
            label: 'a'
          },
          {
            type: 'input-text',
            name: 'b',
            static: false,
            label: 'b'
          },
          {
            type: 'input-text',
            name: 'c',
            static: true,
            label: 'c'
          },
          {
            type: 'group',
            body: [
              {
                type: 'input-text',
                name: 'a',
                label: 'a'
              },
              {
                type: 'input-text',
                name: 'b',
                static: false,
                label: 'b'
              },
              {
                type: 'input-text',
                name: 'c',
                static: true,
                label: 'c'
              }
            ]
          },
          {
            type: 'group',
            static: false,
            body: [
              {
                type: 'input-text',
                name: 'a',
                label: 'a'
              },
              {
                type: 'input-text',
                name: 'b',
                static: false,
                label: 'b'
              },
              {
                type: 'input-text',
                name: 'c',
                static: true,
                label: 'c'
              }
            ]
          }
        ],
        submitText: null,
        actions: []
      },
      {},
      makeEnv()
    )
  );
  expect(container).toMatchSnapshot();
});
