import React from 'react';
import { HighContrastSelector } from 'office-ui-fabric-react/lib/Styling';
// import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
const dragElements={
"data":
[{
  'Name': "Button",
  "Type": "button",
  "disabled": false,
  "checked": false,
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Button',
      'Type': 'text'
  }, {
      'Name': 'Url',
      'Value': '',
      'Type': ''
  }, {
      'Name': 'disabled',
      'Value': false,
      'Type': 'checkbox'
  }, {
      'Name': 'Checked',
      'Value': false,
      'Type': 'checkbox'
  },{
      'Name': 'General Options',
      'Type': 'checkbox',
      'options': [{
          'Name': 'checked',
          'Value': false
       },{
           'Name': 'disabled',
           'Value': false
       }]
  }]
},{
  'Name': 'Breadcrumb',
  "Type": "breadcrumb",
  "options": [{ "value": 'Files', "Text": 'Files',},
  { "value": 'This is folder 1', "Text": 'f1',  },
  { "value": 'This is folder 2', "Text": 'f2',  },
  { "value": 'This is folder 3', "Text": 'f3', },
  { "value": 'This is folder 4', "Text": 'f4' },
  { "value": 'This is folder 5', "Text": 'f5' }],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Breadcrumb',
      'Type': 'text'
  }, {
    'Name': 'Choice',
    'Type': 'dropdown_increment',
    "options": [{ "value": 'Files', "Text": 'Files' },
    { "value": 'This is folder 1', "Text": 'f1'},
    { "value": 'This is folder 2', "Text": 'f2'},
    { "value": 'This is folder 3', "Text": 'f3'},
    { "value": 'This is folder 4', "Text": 'f4'},
    { "value": 'This is folder 5', "Text": 'f5'}]
}]
},{
  'Name': "ContextualMenu",
  "Type": "contextualMenu",
  "options": [{
      'Text':'newItem',
      'value':'New' 

  }, {
      'Text': 'edit',
      'value':'Edit'
  }, {
      'Text': 'rename',
      'value':'Rename'
  }],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'ContextualMenu',
      'Type': 'text'
  }, {
      'Name': 'Choice',
      'Type': 'dropdown_increment',
      "options": [{
        'Text':'newItem',
        'value':'New' 
  
    }, {
        'Text': 'edit',
        'value':'Edit'
    }, {
        'Text': 'rename',
        'value':'Rename'
    }]
  }]
},{
  'Name': 'Checkbox',
  "Type": "checkbox",
  "disabled": false,
  "checked": false,
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Checkbox',
      'Type': 'text'
  },{
      'Name': 'disabled',
      'Value': false,
      'Type': 'checkbox'
  }, {
      'Name': 'Checked',
      'Value': false,
      'Type': 'checkbox'
  },{
      'Name': 'General Options',
      'Type': 'checkbox',
      'options': [{
          'Name': 'checked',
          'Value': false
       },{
           'Name': 'disabled',
           'Value': false
       }]
  }]
},{
  'Name': 'ChoiceGroup',
  "Type": "choiceGroup",
  "required":false,
  "options": [{
    'Text':'Option A',
    'value':'Option A' 

}, {
    'Text': 'Option b',
    'value':'Option B'
}, {
    'Text': 'Option c',
    'value':'Option C'
}],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'ChoiceGroup',
      'Type': 'text'
  }, {
    'Name': 'Choice',
    'Type': 'dropdown_increment',
    'options': [{
            'Text':'Option A',
            'value':'Option A' 

        }, {
            'Text': 'Option b',
            'value':'Option B'
    },{
            'Text': 'Option c',
            'value':'Option C'
    }]
},{
      'Name': 'General Options',
      'Type': 'checkbox',
      'options': [{
          'Name': 'required',
          'Value': false
       }]
  }]
},{
  'Name': "ComboBox",
  "Type": "comboBox",
  "multiSelect": false,
  "options": [{
      'Text':'Choice 1',
      'value':'Choice 1' 

  }, {
      'Text': 'Choice 2',
      'value':'Choice 2'
  }, {
      'Text': 'Choice 3',
      'value':'Choice 3'
  }],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'ComboBox',
      'Type': 'text'
  }, {
      'Name': 'Choice',
      'Type': 'dropdown_increment',
      'options': [{
              'Text':'Choice 1',
              'value':'Choice 1' 

          }, {
              'Text': 'Choice 2',
              'value':'Choice 2'
      },{
              'Text': 'Choice 3',
              'value':'Choice 3'
      }]
  },{
      'Name': 'General Options',
      'Type': 'checkbox',
      'options': [{
          'Name': 'required',
          'Value': false
      },{
          'Name': 'multiSelect',
          'Value': false
       }]
  },{
      'Name': 'Column Span',
      'Value': '1',
      'Type': 'dropdown',
      'PossibleValue': ['1', '2']
  }]
},{
  'Name': 'Calendar',
  "Type": "calendar",
  "DayPickerStrings" :{
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    
      shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    
      shortDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    
      goToToday: 'Go to today',
      weekNumberFormatString: 'Week number {0}'
    },
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Calendar',
      'Type': 'text'
  }]
},{
  'Name': 'ColorPicker',
  "Type": "colorPicker",
  "color":'#ffffff',
  "alphaSliderHidden": false,
  "classNames" :({
    wrapper: {
      display: 'flex'
    },
    column2: {
      marginLeft: 10
    },
    colorSquare: {
      width: 100,
      height: 100,
      margin: '16px 0',
      border: '1px solid #c8c6c4',
      selectors: {
        [HighContrastSelector]: {
          MsHighContrastAdjust: 'none'
        }
      }
    }
  }),
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'ColorPicker',
      'Type': 'text'
  },{}]
},{
  'Name': "Dropdown",
  "Type": "dropdown",
  "disabled": false,
  'required': false,
  "multiSelect": false,
  "options": [{
      'Text':'Choice 1',
      'value':'Choice 1' 

  }, {
      'Text': 'Choice 2',
      'value':'Choice 2'
  }, {
      'Text': 'Choice 3',
      'value':'Choice 3'
  }],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Dropdown',
      'Type': 'text'
  },{
      'Name': 'Choice',
      'Type': 'dropdown_increment',
      'options': [{
              'Text':'Choice 1',
              'value':'Choice 1' 

          }, {
              'Text': 'Choice 2',
              'value':'Choice 2'
      },{
              'Text': 'Choice 3',
              'value':'Choice 3'
      }]
  },{
      'Name': 'General Options',
      'Type': 'checkbox',
      'options': [{
          'Name': 'required',
          'Value': false
      },{
          'Name': 'multiSelect',
          'Value': false
       },{
           'Name': 'disabled',
           'Value': false
       }]
  },{
      'Name': 'Column Span',
      'Value': '1',
      'Type': 'dropdown',
      'PossibleValue': ['1', '2']
  }]
},{
  'Name': "Dialog",
  "Type": "Dialog",
  "Title": 'All emails together',
  "Text": 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Dialog',
      'Type': 'text'
  },{
      'Name': 'Title',
      'Value': 'All emails together',
      'Type': 'text'
  },{
      'Name': 'Text',
      'Value': 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.',
      'Type': 'text'
  }] 
},{
  'Name': 'DetailsList',
  "Type": "detailslist",
  "items":[{
      "name": "abc",
      "dateModifiedValue":"12/03/2019",
      "modifiedBy":"xyz",
      "fileSizeRaw": "80kb"

  }],
  "isModalSelection":false,
   "columns": [
      {
        key: 'column2',
        name: 'Name',
        fieldName: 'name',
        minWidth: 210,
        maxWidth: 350,
        isRowHeader: true,
        isResizable: true,
        isSorted: true,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        data: 'string',
        isPadded: true
      },
      {
        key: 'column3',
        name: 'Date Modified',
        fieldName: 'dateModifiedValue',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        data: 'number',
        onRender: (item) => {
          return <span>{item.dateModified}</span>;
        },
        isPadded: true
      },
      {
        key: 'column4',
        name: 'Modified By',
        fieldName: 'modifiedBy',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: 'string',
        onRender: (item) => {
          return <span>{item.modifiedBy}</span>;
        },
        isPadded: true
      },
      {
        key: 'column5',
        name: 'File Size',
        fieldName: 'fileSizeRaw',
        minWidth: 70,
        maxWidth: 90,
        isResizable: true,
        isCollapsible: true,
        data: 'number',
        onRender: (item) => {
          return <span>{item.fileSize}</span>;
        }
      }
    ],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'DetailsList',
      'Type': 'text'
  }]
},{
  'Name': 'Label',
  "Type": "label",
  'required': false,
  "disabled": false,
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Label',
      'Type': 'text'
  },{},{
    'Name': 'General Options',
    'Type': 'checkbox',
    'options': [{
        'Name': 'required',
        'Value': false
    },{
         'Name': 'disabled',
         'Value': false
     }]
}]
},{
  'Name': 'Link',
  "Type": "link",
  'Url': 'http://dev.office.com/fabric/components/link',
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Link',
      'Type': 'text'
  },{
      'Name': 'Url',
      'Value': 'http://dev.office.com/fabric/components/link',
      'Type': 'text'
  }]
},{
  'Name': "Modal",
  "Type": "Modal",
  "Title": 'Lorem Ipsum',
  "Text": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate inleo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsumvestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In aodio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus',
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Modal',
      'Type': 'text'
  },{
      'Name': 'Title',
      'Value': 'Lorem Ipsum',
      'Type': 'text'
  },{
      'Name': 'Text',
      'Value': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lorem nulla, malesuada ut sagittis sit amet, vulputate inleo. Maecenas vulputate congue sapien eu tincidunt. Etiam eu sem turpis. Fusce tempor sagittis nunc, ut interdum ipsumvestibulum non. Proin dolor elit, aliquam eget tincidunt non, vestibulum ut turpis. In hac habitasse platea dictumst. In aodio eget enim porttitor maximus. Aliquam nulla nibh, ullamcorper aliquam placerat eu, viverra et dui. Phasellus ex lectus',
      'Type': 'text'
  }] 
},{
  'Name': 'Nav',
  "Type": "nav",
  "options": [{
      "Text": 'key1',
      "value": 'Home',
      "url": 'http://example.com',
      "links": [{
        "value": 'Activity',
        "url": 'http://msn.com',
        "Text": 'key1'
      },
      {
        "value": 'MSN',
        "url": 'http://msn.com',
        "Text": 'key2',
        "links": []
      }]
    },
    {
      "Text": 'key2',
      "value": 'Documents',
      "url": 'http://example.com',
      "isExpanded": true,
      "links": []
    },
    {
      "Text": 'key3',
      "value": 'Pages',
      "url": 'http://msn.com',
        "links": []
    },{
      "Text": 'key4',
      "value": 'Notebook',
      "url": 'http://msn.com',
      "links": []
    },{
      "Text": 'key5',
      "value": 'Communication and Media',
      "url": 'http://msn.com',
      "links": []
    },{
      "Text": 'key6',
      "value": 'News',
      "url": 'http://cnn.com',
      "icon": 'News',
      "links": []
    }],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Nav',
      'Type': 'text'
  },{
      'Name': 'Choice',
      'Type': 'dropdown_increment',
      "options": [{
        "Text": 'key1',
        "value": 'Home',
        "url": 'http://example.com',
      },
      {
        "Text": 'key2',
        "value": 'Documents',
        "url": 'http://example.com',
        "isExpanded": true
      },
      {
        "Text": 'key3',
        "value": 'Pages',
        "url": 'http://msn.com',
      },{
        "Text": 'key4',
        "value": 'Notebook',
        "url": 'http://msn.com',
      },{
        "Text": 'key5',
        "value": 'Communication and Media',
        "url": 'http://msn.com',
      },{
        "Text": 'key6',
        "value": 'News',
        "url": 'http://cnn.com',
        "icon": 'News',
      }]
  }]
},{
  'Name': 'OverflowSet',
  "Type": "overflowSet",
  "options": [{
      "Text": 'item1',
      "value": 'Link 1'
    },
    {
      "Text": 'item2',
      "value": 'Link 2'
    },
    {
      "Text": 'item3',
      "value": 'Link 3'
    }],
  "overflowItems" :[{
      "Text": 'item4',
      "value": 'Overflow Link 1'
    },
    {
      "Text": 'item5',
      "value": 'Overflow Link 2'
    }],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'OverflowSet',
      'Type': 'text'
  },{
      'Name': 'Choice',
      'Type': 'dropdown_increment',
      "options": [{
          "Text": 'item1',
          "value": 'Link 1'
        },
        {
          "Text": 'item2',
          "value": 'Link 2'
        },
        {
          "Text": 'item3',
          "value": 'Link 3'
        }]
  },{
      'Name': 'overflowItems',
      'Type': 'overflowItems',
      "options" :[{
      "Text": 'item4',
      "value": 'Overflow Link 1'
    },
    {
      "Text": 'item5',
      "value": 'Overflow Link 2'
    }]
  }]
},{
  'Name': 'Pivot',
  "Type": "pivot",
  "options": [{
    'Text':'My Files',
    'value':'My Files value' 

}, {
    'Text': 'Recent',
    'value':'Recent value'
}, {
    'Text': 'Shared with me',
    'value':'Shared with me value'
}],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Pivot',
      'Type': 'text'
  }, {
    'Name': 'Choice',
    'Type': 'dropdown_increment',
    "options": [{
      'Text':'My Files',
      'value':'My Files value' 
  
  }, {
      'Text': 'Recent',
      'value':'Recent value'
  }, {
      'Text': 'Shared with me',
      'value':'Shared with me value'
  }]
}]
},{
  'Name': 'Pickers',
  "Type": "pickers",
  "disabled": false,
  "items": [
    'black',
    'blue',
    'brown',
    'cyan',
    'green',
    'magenta',
    'mauve',
    'orange',
    'pink',
    'purple',
    'red',
    'rose',
    'violet',
    'white',
    'yellow'
  ],
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Pickers',
      'Type': 'text'
  },{}]
},{
  'Name': 'Rating',
  "Type": "rating",
  "maximum": 5,
  "minimum": 1,
  "step": undefined,
  "disabled": false,
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Rating',
      'Type': 'text'
  },{
    'Name': 'maximum',
    'Value': '5',
    'Type': 'text'
},{
  'Name': 'General Options',
  'Type': 'checkbox',
  'options': [{
       'Name': 'disabled',
       'Value': false
   }]
}
]
},{
  'Name': 'SearchBox',
  "Type": "search",
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'SearchBox',
      'Type': 'text'
  }]
},{
  'Name': 'Slider',
  "Type": "slider",
  "maximum": 5,
  "minimum": 1,
  "required": true,
  "step": 1,
  "disabled": false,
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Slider',
      'Type': 'text'
  },{
    'Name': 'maximum',
    'Value': '5',
    'Type': 'text'
},{
  'Name': 'General Options',
  'Type': 'checkbox',
  'options': [{
    'Name': 'required',
    'Value': true
  },{
       'Name': 'disabled',
       'Value': false
   }]
}
]
},{
  'Name': 'SpinButton',
  "Type": "spinButton",
  "maximum": 100,
  "minimum": 0,
  "step": 1,
  "disabled": false,
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'SpinButton',
      'Type': 'text'
  },{
    'Name': 'maximum',
    'Value': '100',
    'Type': 'text'
},{
  'Name': 'step',
  'Value': '1',
  'Type': 'text'
},{
  'Name': 'General Options',
  'Type': 'checkbox',
  'options': [{
       'Name': 'disabled',
       'Value': false
   }]
}
]
},{
  'Name': 'Stack',
  "Type": "stack",
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Stack',
      'Type': 'text'
  }]
},{
  'Name': "TextField",
  'Type': "TextField",
  'required': false,
  'disabled': false,
  'readOnly': false,
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'TextField',
      'Type': 'text'
  }, {
      'Name': 'Max Input Length',
      'Value': '50',
      'Type': 'text'
  }, {
      'Name': 'General Options',
      'Type': 'checkbox',
      'options': [{
          'Name': 'required',
          'Value': false
      },{
          'Name': 'readOnly',
          'Value': false
       }, {
           'Name': 'disabled',
           'Value': false
       }]
  }
  ]
},{
  'Name': 'Text',
  "Type": "text",
  "Text": 'The quick brown fox jumped over the lazy dog.',
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Text',
      'Type': 'text'
  },{},{
    'Name': 'Text',
      'Value': 'The quick brown fox jumped over the lazy dog.',
      'Type': 'text'
  }]
},{
  'Name': 'Toggle',
  "Type": "toggle",
  'Settings': [{
      'Name': 'Field Label',
      'Value': 'Toggle',
      'Type': 'text'
  }]
}]
};
export {dragElements};