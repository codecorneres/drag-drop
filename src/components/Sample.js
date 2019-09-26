import React, { Component } from 'react';
import '../App.css';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
// import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Modal } from 'office-ui-fabric-react/lib/Modal';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { ComboBox } from 'office-ui-fabric-react/lib/index';
import { Dropdown} from 'office-ui-fabric-react/lib/Dropdown';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';
import { OverflowSet } from 'office-ui-fabric-react/lib/OverflowSet';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { ChoiceGroup } from 'office-ui-fabric-react/lib/ChoiceGroup';
import { Rating, RatingSize } from 'office-ui-fabric-react/lib/Rating';
import { Calendar, DayOfWeek } from 'office-ui-fabric-react/lib/Calendar';
import { MarqueeSelection } from 'office-ui-fabric-react/lib/MarqueeSelection';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DetailsList, DetailsListLayoutMode, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';

class Sample extends Component {
  constructor(props) {
    super(props);
    console.log(props.dropelement);
    this.state = { 
        dropelement: []  
    }
  }
  componentDidMount()
  {
    let dropeelm= sessionStorage.getItem("dropelement");
    this.setState({
        dropelement: JSON.parse(dropeelm)
    })
  }
   _showDialog = () => {
    this.setState({ hideDialog: false });
  };

   _closeDialog = () => {
    this.setState({ hideDialog: true });
  };
  _showModal = () => {
    this.setState({ showModal: true });
  };

  _closeModal = () => {
    this.setState({ showModal: false });
  };
  _onRenderItem=(item) =>{
    return (
      <Link  onClick={item.onClick}>
        {item.name}
      </Link>
    );
  }
  _onRenderOverflowButton = (overflowItems) => {
    return <IconButton  menuIconProps={{ iconName: 'More' }} menuProps={{ items: overflowItems }} />;
  }
  onLinkClick = (ev, item) => {
    if (item && item.name === 'News') {
      alert('News link clicked');
    }
  };
  render() { 
    const { dropelement } = this.state;
    sessionStorage.setItem("dropelements", JSON.stringify(dropelement));
    let DropItems ='';
    if(dropelement){
    DropItems = dropelement.map((elem, k) =>
    { 
        switch(elem.Type) { 
        case 'TextField':
        return <div className="fields" key ={k}>
       <TextField label={elem.Name} id={"#" + k} key={k+elem.Name} disabled={elem.disabled} readOnly={elem.readOnly} required={elem.required}/> 
       </div>;
        case 'dropdown':
        return <div className="fields"  key ={k}>
            <Dropdown
            label={elem.Name}
            placeholder="Select an Option"
            disabled={elem.disabled}
            required={elem.required}
            multiSelect= {elem.multiSelect}
            options={elem.options.map((options, i)=> {
                return { key:i, text: options.value}
            })}  
            /></div>;
        case 'button':
        return <div className="fields"  key ={k}>
            <PrimaryButton
            data-automation-id={"#" + k}
            disabled={elem.disabled}
            checked={elem.checked}
            text={elem.Name}
            allowDisabledFocus={true}
          /></div>;
          case 'Dialog': 
          return <div className="fields"  key ={k}> 
           <DefaultButton secondaryText="Opens the Sample Dialog" onClick={this._showDialog} text={elem.Name} />
           <Dialog
            hidden={this.state.hideDialog}
            onDismiss={this._closeDialog}
            dialogContentProps={{
            type: DialogType.normal,
            title: elem.Title,
            subText: elem.Text
          }}
          modalProps={{
            titleAriaId: this._labelId,
            subtitleAriaId: this._subTextId,
            isBlocking: false,
            containerClassName: 'ms-dialogMainOverride'
          }}
        >
          <DialogFooter>
            <PrimaryButton onClick={this._closeDialog} text="Save" />
            <DefaultButton onClick={this._closeDialog} text="Cancel" />
          </DialogFooter>
        </Dialog>
        </div>;
        case 'Modal':
        return <div className="fields"  key ={k}>
           <DefaultButton secondaryText="Opens the Sample Modal" onClick={this._showModal} text={elem.Name}/>
           <Modal
          titleAriaId={this._titleId}
          subtitleAriaId={this._subtitleId}
          isOpen={this.state.showModal}
          onDismiss={this._closeModal}
          isBlocking={false}
          containerClassName="ms-modalExample-container"
        >
          <div className="ms-modalExample-header">
            <span id={this._titleId}>{elem.Title}</span>
          </div>
          <div id={this._subtitleId} className="ms-modalExample-body">
            <DefaultButton onClick={this._closeModal} text="Close" />
            <p>{elem.Text}</p>
            </div>
        </Modal>
            </div>;
        case 'search':
        return  <div className="fields"  key ={k}>
            <SearchBox
            placeholder="Search"
            onSearch={newValue => console.log('value is ' + newValue)}
            onChange={() => console.log('onChange called')}
            />
        </div>;
        case 'toggle':
        return <div className="fields"  key ={k}> 
            <Toggle
            defaultChecked={true}
            label={elem.Name}
            onText="On"
            offText="Off"
            onChange={this._onChange}
            />
        </div>;
        case 'link':
        return <div className="fields" key ={k}>
          <Link href={elem.Url}>{elem.Name}</Link>
        </div>;
        case 'pivot':
          return <div className="fields" key ={k}>
          <Pivot>
         { elem.options.map((options, k)=> {
                  return <PivotItem key={k+options.Name}
                  headerText={options.Text}>
                  <Label>{options.value}</Label>
                </PivotItem>
              })
          }
          </Pivot>
          </div>;
           case 'calendar':
           return <div className="fields"  key ={k}>
           <Calendar
            onSelectDate={this._onSelectDate}
            onDismiss={this._onDismiss}
            isMonthPickerVisible={this.props.isMonthPickerVisible}
            dateRangeType={this.props.dateRangeType}
            autoNavigateOnSelection={this.props.autoNavigateOnSelection}
            showGoToToday={this.props.showGoToToday}
            value={this.state.selectedDate}
            firstDayOfWeek={this.props.firstDayOfWeek ? this.props.firstDayOfWeek : DayOfWeek.Sunday}
            strings={elem.DayPickerStrings}
            highlightCurrentMonth={this.props.highlightCurrentMonth}
            highlightSelectedMonth={this.props.highlightSelectedMonth}
            isDayPickerVisible={this.props.isDayPickerVisible}
            showMonthPickerAsOverlay={this.props.showMonthPickerAsOverlay}
            showWeekNumbers={this.props.showWeekNumbers}
            minDate={this.props.minDate}
            maxDate={this.props.maxDate}
            restrictedDates={this.props.restrictedDates}
            showSixWeeksByDefault={this.props.showSixWeeksByDefault}
            workWeekDays={this.props.workWeekDays}
          />
          {this.props.showNavigateButtons && (
            <div>
              <DefaultButton  onClick={this._goPrevious} text="Previous" />
              <DefaultButton  onClick={this._goNext} text="Next" />
            </div>
          )}
           </div>;
          case 'detailslist':
          return <div className="fields"  key ={k}>
          <MarqueeSelection selection={this._selection}>
            <DetailsList
              items={elem.items}
              columns={elem.columns}
              selectionMode={elem.isModalSelection ? SelectionMode.multiple : SelectionMode.none}
              setKey="set"
              layoutMode={DetailsListLayoutMode.justified}
              isHeaderVisible={true}
              selection={this._selection}
              selectionPreservedOnEmptyClick={true}
              onItemInvoked={this._onItemInvoked}
              enterModalSelectionOnTouch={true}
              ariaLabelForSelectionColumn="Toggle selection"
              ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            />
          </MarqueeSelection>
          </div>;
          case 'checkbox':
          return <div className="fields" key ={k}>
          <Checkbox label={elem.Name} onChange={this._onCheckboxChange} checked={elem.checked} disabled={elem.disabled}/>
          </div>;
          case 'choiceGroup':
          return <div className="fields" key ={k}>
          <ChoiceGroup
            className="defaultChoiceGroup"
            defaultSelectedKey="B"
            options= { elem.options.map((options, k)=> {
              return {
                key: k,
                text: options.value,
              }
              })
            } 
            onChange={this._onChange}
            label={elem.Name}
            required={elem.required}
          />
          </div>;
           case 'comboBox':
           return <div className="fields" key ={k}>
           <ComboBox
            multiSelect = {elem.multiSelect}
            label={elem.Name}
            allowFreeform
            autoComplete="on"
            options= { elem.options.map((options, k)=> {
              return {
                key: k,
                text: options.value,
              }
              })
            } 
          />
          </div>;
          case 'overflowSet':
          return <div className="fields" key ={k}>
          <OverflowSet
            items={elem.options.map((options, k)=> {
              return {
                key: options.Text,
                name: options.value,
              }
              })}
            overflowItems={elem.overflowItems.map((options, k)=> {
              return {
                key: options.Text,
                name: options.value,
              }
              })}
            onRenderOverflowButton={this._onRenderOverflowButton}
            onRenderItem={this._onRenderItem}
          />
          </div>;
          case 'breadcrumb':
          return <div className="fields" key ={k}>
          <Breadcrumb
            items={elem.options.map((options, k)=> {
              return {
                key: options.Text,
                text: options.value,
                onclick: options.onClick
              }
              })
              
            }
            dividerAs={this._getCustomDivider}
            ariaLabel={'Breadcrumb with custom divider icon'}
          />
         </div>;
         case 'nav':
         return <div className="fields" key ={k}>
         <Nav
            groups={[
              {
                links: elem.options.map((options, k)=> {
                  return { key:options.Text, name: options.value, url: options.url, links: options.links.map((links, k)=> {return { key:links.Text, name: links.value, url: links.url}})}
              }) 
              }
            ]}
            onLinkClick={this.onLinkClick}
            expandedStateText={'expanded'}
            collapsedStateText={'collapsed'}
            selectedKey={'key3'}
            expandButtonAriaLabel={'Expand or collapse'}
          />
        </div>;
        case 'rating':
        return <div className="fields" key ={k}>
        {elem.Name}
        <Rating
            min={elem.minimum}
            max={elem.maximum}
            size={RatingSize.Large}
            rating={elem.step}
            getAriaLabel={this._getRatingComponentAriaLabel}
            onChange={this._onLargeStarChange}
            disabled={elem.disabled}
            ariaLabelFormat={'{0} of {1} stars selected'}
          />
       </div>;
        case 'spinButton':
        return <div className="fields" key ={k}>
        <SpinButton defaultValue="0" label={elem.Name} min={elem.minimum} max={elem.maximum} step={elem.step}
            incrementButtonAriaLabel={'Increase value by 1'}
            decrementButtonAriaLabel={'Decrease value by 1'}
          />
         </div>;
       case 'slider':
       return <div className="fields" key ={k}>
       <Slider label={elem.Name} min={elem.minimum} max={elem.maximum} step={elem.step} showValue={elem.required} disabled={elem.disabled} />
      </div>;
      case 'label':
      return <div className="fields" key ={k}>
      <Label disabled={elem.disabled} required={elem.required}>{elem.Name}</Label>
      </div>;
      default: return '';
      }   
    });
}
   
    return (
      <div className="App container">
      <header> <Link className="back" href="/"> Back</Link></header>
        <div className="page-builder row">
            <div className="col-md-12 preveiwrow" id="sortable">
                { DropItems}  
            </div>
        </div>
      </div>
    );
  }
  
}
export default Sample;