import React, { Component } from 'react';
// import { Router, Route,Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import { Nav } from 'office-ui-fabric-react/lib/Nav';

import { Icon } from 'office-ui-fabric-react/lib/Icon';
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
import { dragElements } from './FabricComponent';
// import Sample from './Sample';
// import DragDrop from './DragDrop';

let TempVal = 0;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dragElements : dragElements.data,
    dropelement: [],
    dropelementsettings: [],
    index: '',
    data: [],
    showResults: false,
    hideDialog: true,
    showModal: false,
    selectedDate: null
    }
   // this.showelement = this.showelement.bind(this);
    this.showsettings = this.showsettings.bind(this);
    this.deletecolm = this.deletecolm.bind(this);
    this.handelchange = this.handelchange.bind(this);
    this.handelchangeoptions = this.handelchangeoptions.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.array_move = this.array_move.bind(this);
  }

  showsettings = (data, i)=>{
    this.setState({ dropelementsettings: data.Settings, index: i, showResults:true})
  }
  
  deletecolm = (ind)=>{
    this.setState({ showResults:false});
    const { dropelement } = this.state;
    var index = dropelement.indexOf(ind);
    if (index > -1) {
        dropelement.splice(ind, 1);
    }
    dropelement.splice(ind, 1);
    this.setState({dropelement});
  }
  handelchange =  (e, ind) =>{
    const { dropelement, index } = this.state;
    let elementCopy = JSON.parse(JSON.stringify(dropelement));
    for (let i = 0; i<=elementCopy.length; i++){
        if(i === index){
            switch(e.target.name){
                case 'Field Label':
                    elementCopy[i].Name = e.target.value;
                    elementCopy[i].Settings[0].Value = e.target.value;
                break;
                case 'Title':
                    elementCopy[i].Settings[1].Value = e.target.value;
                    elementCopy[i].Title = e.target.value;
                break;
                case 'Text':
                    elementCopy[i].Settings[2].Value = e.target.value;
                    elementCopy[i].Text = e.target.value;
                break;
                case 'Url':
                    elementCopy[i].Settings[1].Value = e.target.value;
                    elementCopy[i].Url = e.target.value;
                break;
                case 'maximum':
                    elementCopy[i].Settings[1].Value = e.target.value;
                    elementCopy[i].maximum = e.target.value;
                break;
                case 'minimum':
                    elementCopy[i].Settings[2].Value = e.target.value;
                    elementCopy[i].minimum = e.target.value;
                break;
                case 'step':
                    elementCopy[i].Settings[2].Value = e.target.value;
                    elementCopy[i].step = e.target.value;
                break;
                default: break;
            }
           
            this.setState({ dropelementsettings: elementCopy[i].Settings})
        }  
    }
    this.setState({dropelement: elementCopy });
  }
  handelChoicechange = (e, name, ind)=>  {
    const { dropelement, index } = this.state;
    let elementCopy = JSON.parse(JSON.stringify(dropelement)); 
    for (let i = 0; i<=elementCopy.length; i++){
        if(i === index){
            for (let j = 0; j<elementCopy[i].options.length; j++){
                if(j === ind){
                  let opt=[];
                  if(name ==="Choice"){
                    // elementCopy[i].options[j].Text = e.target.value;
                    elementCopy[i].options[j].value = e.target.value;
                    opt = elementCopy[i].Settings[1].options;
                  }
                  if(name ==="overflowItems"){
                    elementCopy[i].overflowItems[j].Text = e.target.value; 
                    elementCopy[i].overflowItems[j].value = e.target.value;
                    opt = elementCopy[i].Settings[2].options;
                  }
                    // elementCopy[i].options[j].Text = e.target.name;
                    // elementCopy[i].options[j].value = e.target.value;
                    // let opt = elementCopy[i].Settings[1].options;
                   
                    for(let k = 0; k< opt.length; k++)
                    {  
                        if(opt[k].Text === e.target.name)
                        {
                            opt[k].value = e.target.value;
                        }
                    }
                    this.setState({ dropelementsettings: elementCopy[i].Settings}) 
                    this.setState({dropelement: elementCopy });
                }
            }
        }
    }
  }
  handelChoicechange1 = (e,name, ind)=>
  {
    const { dropelement, index } = this.state;
    let elementCopy = JSON.parse(JSON.stringify(dropelement)); 
    for (let i = 0; i<=elementCopy.length; i++){
        if(i === index){
            for (let j = 0; j<elementCopy[i].options.length; j++){
                if(j === ind){
                  let opt=[];
                  if(name ==="Choice"){
                    elementCopy[i].options[j].Text = e.target.value;
                    opt = elementCopy[i].Settings[1].options;
                  }
                  if(name ==="overflowItems"){
                    elementCopy[i].overflowItems[j].Text = e.target.value; 
                    opt = elementCopy[i].Settings[2].options;
                  }
                    // elementCopy[i].options[j].Text = e.target.value;
                   // elementCopy[i].options[j].value = e.target.value;
                    
                    for(let k = 0; k< opt.length; k++)
                    {  
                        if(opt[k].Text === e.target.name)
                        {
                            opt[k].Text = e.target.value;
                        }
                    }
                    this.setState({ dropelementsettings: elementCopy[i].Settings}) 
                    this.setState({dropelement: elementCopy });
                }
            }
        }
    }
  }
  handelChoicechange2 =(e, ind) =>
  {
    const { dropelement, index } = this.state;
    let elementCopy = JSON.parse(JSON.stringify(dropelement)); 
    for (let i = 0; i<=elementCopy.length; i++){
        if(i === index){
            for (let j = 0; j<elementCopy[i].options.length; j++){
                if(j === ind){
                  let opt=[];
                    elementCopy[i].options[j].url = e.target.value;
                    opt = elementCopy[i].Settings[1].options;
                    
                    for(let k = 0; k< opt.length; k++)
                    {  
                        if(opt[k].Text === e.target.name)
                        {
                            opt[k].url = e.target.value;
                        }
                    }
                    this.setState({ dropelementsettings: elementCopy[i].Settings}) 
                    this.setState({dropelement: elementCopy });
                }
            }
        }
    }
  }
  handelchangeoptions = (e) =>{
    const { dropelement, index } = this.state;
    let elementCopy = JSON.parse(JSON.stringify(dropelement));
    for (let i = 0; i<=elementCopy.length; i++){ 
        if(i === index){
            switch(e.target.name){
                case 'required':
                   if(elementCopy[i].required ===true){
                        elementCopy[i].Settings[2].options[0].Value = false;
                        elementCopy[i].required  = false;
                    } else{
                        elementCopy[i].Settings[2].options[0].Value = true;
                        elementCopy[i].required = true; 
                    }
                break;
                case 'readOnly':
                if(elementCopy[i].readOnly ===true){
                    elementCopy[i].Settings[2].options[1].Value = false;
                    elementCopy[i].readOnly  = false;
                } else{
                    elementCopy[i].Settings[2].options[1].Value = true;
                    elementCopy[i].readOnly = true; 
                }
                break;
                case 'disabled':
                for(let j=0; j< elementCopy[i].Settings.length; j++){
                    if(elementCopy[i].Settings[j].Name === 'General Options')
                    {
                        let Name = elementCopy[i].Settings[j].options;
                        for(let k=0; k< Name.length; k++){
                            if(Name[k].Name === 'disabled')
                            {
                                if(Name[k].Value ===true){
                                    Name[k].Value = false;
                                } else{
                                    Name[k].Value= true; 
                                }
                            }
                        }
                    }
                }
                
                if(elementCopy[i].disabled ===true){
                    elementCopy[i].disabled  = false;
                } else{
                    elementCopy[i].disabled = true; 
                }
                break;
                case 'multiSelect':
                    if(elementCopy[i].multiSelect ===true){
                        elementCopy[i].multiSelect  = false;
                        elementCopy[i].Settings[2].options[1].Value = false;
                    } else{
                        elementCopy[i].multiSelect = true; 
                        elementCopy[i].Settings[2].options[1].Value = true;
                    }
                break;
                case 'checked':
                for(let j=0; j< elementCopy[i].Settings.length; j++){
                  if(elementCopy[i].Settings[j].Name === 'General Options')
                  {
                      let Name = elementCopy[i].Settings[j].options;
                      for(let k=0; k< Name.length; k++){
                          if(Name[k].Name === 'checked')
                          {
                              if(Name[k].Value ===true){
                                  Name[k].Value = false;
                                  elementCopy[i].checked  = false;
                              } else{
                                  Name[k].Value= true; 
                                  elementCopy[i].checked = true; 
                              }
                          }
                      }
                  }
                }
                break;
                default: break;
            }
            this.setState({ dropelementsettings: elementCopy[i].Settings})
        }  
    }
    this.setState({dropelement: elementCopy });
  }

  _addoptions = (name) => {
    const { dropelement, index } = this.state;
    let elementCopy = JSON.parse(JSON.stringify(dropelement));
    for (let i = 0; i<=elementCopy.length; i++){ 
        if(i === index){
            var text = elementCopy[i].Settings[1].options.length*1 + 1*1;  
            if(name ==="Choice"){
              elementCopy[i].options.push({'Text': "Choice "+ text, 'value': "Choice "+ text});
              elementCopy[i].Settings[1].options.push({'Text': "Choice "+ text, 'value': "Choice "+ text});
            }
            if(name ==="overflowItems"){
              elementCopy[i].overflowItems.push({'Text': "Choice "+ text, 'value': "Choice "+ text});
              elementCopy[i].Settings[2].options.push({'Text': "Choice "+ text, 'value': "Choice "+ text});
            }
            // elementCopy[i].Settings[1].options.push({'Text': "Choice "+ text, 'value': "Choice "+ text});
            this.setState({ dropelement: elementCopy, dropelementsettings: elementCopy[i].Settings});
        }
    }  
  }
deleteoption =(ind, name) => {
    const { dropelement,index } = this.state;
    for (let i = 0; i<=dropelement.length; i++){ 
        if(i === index){
            var indexs = dropelement[i].options.indexOf(ind);
            if (indexs > -1) {
              if(name ==="Choice"){
                dropelement[i].options.splice(ind, 1);
                dropelement[i].Settings[1].options.splice(ind, 1);
              }
              if(name ==="overflowItems"){
                dropelement[i].overflowItems.splice(ind, 1);
                dropelement[i].Settings[2].options.splice(ind, 1);
              } 
            }
            if(name ==="Choice"){
              dropelement[i].options.splice(ind, 1);
              dropelement[i].Settings[1].options.splice(ind, 1);
            }
            if(name ==="overflowItems"){
              dropelement[i].overflowItems.splice(ind, 1);
              dropelement[i].Settings[2].options.splice(ind, 1);
            } 
        }
        this.setState({dropelement});
    }
}

  onDragOver = (ev) =>{
    ev.preventDefault();
  }
  onDragStart = (ev, data, index) => {
    var js = JSON.stringify(data);
    var id = ev.target.id;
    ev.dataTransfer.setData("index", index);
    ev.dataTransfer.setData("id", id);
    ev.dataTransfer.setData("data", js);
  }
  dragEnter = (ev) =>{
    ev.preventDefault();
    ev.target.style.border = "2px dotted green";
  }
  dragLeave = (ev) =>{
    ev.preventDefault();
    ev.target.style.border = "";
  }
  onDrop = (ev, ind) => {
    const { dropelement } = this.state;
    var index = ev.dataTransfer.getData("index");
    var id = ev.dataTransfer.getData("id");
    var data = JSON.parse(ev.dataTransfer.getData("data"));
  
    if (ind !== undefined){
        TempVal = 1;  
    }
    if(id){
        if (ind !== undefined){
          this.array_move(dropelement, index, ind); 
        }
    } else {
      if(TempVal === 1 && ind !== undefined){
        TempVal = 1;
          dropelement.splice(ind, 0, data);
      } else {
        if(TempVal === 1 && ind === undefined){
          TempVal = 0;
        } else {
          dropelement.push(data);
        }
      }
    }
    this.setState({dropelement});
  }
//   dragEnd = (ev) =>{
//     ev.target.style.border = "";
//   }
  array_move = (arr, old_index, new_index)=> {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
  };
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
  onLinkClick = (ev, item) => {
    if (item && item.name === 'News') {
      alert('News link clicked');
    }
  };
   _onRenderOverflowButton = (overflowItems) => {
    return <IconButton  menuIconProps={{ iconName: 'More' }} menuProps={{ items: overflowItems }} />;
  }
  render() { 
    const { dragElements, dropelement, dropelementsettings, showResults } = this.state;
    sessionStorage.setItem("dropelement", dropelement)
    const history = createBrowserHistory();
    const listItems = dragElements.map((elem, i) =>
        <div className="draggable row" draggable onDragStart={(e)=>this.onDragStart(e, elem, i)}  key={i} >{elem.Name}</div>
    );
    
    let DropItems = dropelement.map((elem, i) =>
    { 
        switch(elem.Type) { 
        case 'TextField':
        return  <div className="form-group" id={elem.Name + i } key={i+elem.Name} draggable onDragStart={(e)=>this.onDragStart(e, elem, i)}  onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}} > 
            <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
            <div className="field" onClick={() => this.showsettings(elem, i)}>
                <Label></Label>
                <TextField label={elem.Name} id={"#" + i} key={i+elem.Name} disabled={elem.disabled} readOnly={elem.readOnly} required={elem.required}/>
            </div>
            </div>;
        case 'dropdown':
        return <div className="form-group"  key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}>
            <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
            <div className="field" onClick={() => this.showsettings(elem, i)}>
            <Dropdown
            label={elem.Name}
            placeholder="Select an Option"
            disabled={elem.disabled}
            required={elem.required}
            multiSelect= {elem.multiSelect}
            options={elem.options.map((options, k)=> {
              return { key:k, text: options.value}
          }) }  
            /></div>
            </div>;
        case 'button':
        return  <div className="form-group"  key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
           <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
           <div className="field" onClick={() => this.showsettings(elem, i)}>
            <PrimaryButton
            data-automation-id={"#" + i}
            disabled={elem.disabled}
            checked={elem.checked}
            text={elem.Name}
            allowDisabledFocus={true}
          /></div>
          </div>;
        case 'Dialog':
        return  <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
           <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
           <div className="field" onClick={() => this.showsettings(elem, i)}>
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
        </div>
        </div>;
        case 'Modal':
        return  <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
           <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
           <div className="field" onClick={() => this.showsettings(elem, i)}>
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
            </div>
          </div>;
        case 'search':
        return  <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
           <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
           <div className="field" onClick={() => this.showsettings(elem, i)}>
           <Label>{elem.Name}</Label>
            <SearchBox
            placeholder="Search"
            onSearch={newValue => console.log('value is ' + newValue)}
            onChange={() => console.log('onChange called')}
            />
        </div></div>;
        case 'toggle':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}> 
            <Toggle
            defaultChecked={true}
            label={elem.Name}
            onText="On"
            offText="Off"
            onChange={this._onChange}
            />
        </div></div>;
        case 'link':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}>
        <Link href={elem.Url}>{elem.Name}</Link>
        </div></div>;
        case 'pivot':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}>
        <Label></Label>
        <Pivot>
       { elem.options.map((options, k)=> {
                return <PivotItem key={k+options.Name}
                headerText={options.Text}>
                <Label>{options.value}</Label>
              </PivotItem>
            })
        }
        </Pivot>
        </div></div>;
         case 'calendar':
         return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
         <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
         <div className="field" onClick={() => this.showsettings(elem, i)}>
         <Label></Label>
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
         </div></div>;
        case 'detailslist':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}>
        <Label></Label>
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
        </div></div>;
        case 'checkbox':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}>
        <Checkbox label={elem.Name} onChange={this._onCheckboxChange} checked={elem.checked} disabled={elem.disabled}/>
        </div></div>;
        case 'choiceGroup':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}>
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
        </div></div>;
         case 'comboBox':
         return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
         <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
         <div className="field" onClick={() => this.showsettings(elem, i)}>
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
        </div></div>;
        case 'overflowSet':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}>
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
        </div></div>;
        case 'breadcrumb':
        return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
        <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
        <div className="field" onClick={() => this.showsettings(elem, i)}>
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
       </div></div>;
       case 'nav':
       return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
       <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
       <div className="field" onClick={() => this.showsettings(elem, i)}>
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
      </div></div>;
      case 'rating':
      return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
      <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
      <div className="field" onClick={() => this.showsettings(elem, i)}>
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
     </div></div>;
      case 'spinButton':
      return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
      <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
      <div className="field" onClick={() => this.showsettings(elem, i)}>
      <SpinButton defaultValue="0" label={elem.Name} min={elem.minimum} max={elem.maximum} step={elem.step}
          incrementButtonAriaLabel={'Increase value by 1'}
          decrementButtonAriaLabel={'Decrease value by 1'}
        />
       </div></div>;
     case 'slider':
     return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
     <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
     <div className="field" onClick={() => this.showsettings(elem, i)}>
     <Slider label={elem.Name} min={elem.minimum} max={elem.maximum} step={elem.step} showValue={elem.required} disabled={elem.disabled} />
    </div></div>;
    case 'label':
    return <div className="form-group" key={i+elem.Name} id={elem.Name + i } draggable onDragStart={(e)=>this.onDragStart(e, elem, i)} onDrop={(e)=>{this.onDrop(e, i)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}> 
    <Icon iconName="BoxSubtractSolid" className="ms-IconExample deletebtn"  onClick={() => this.deletecolm(i)}/>
    <div className="field" onClick={() => this.showsettings(elem, i)}>
    <Label disabled={elem.disabled} required={elem.required}>{elem.Name}</Label>
    </div></div>;
        default: return '';
        }   
    });
    let allsettings ='';
    if (dropelementsettings.length !==''){
        allsettings = dropelementsettings.map((elem, i) =>
        { switch(elem.Name) { 
            case 'Field Label':
            return <div className="form-group" key={i} >
                {/* <Label>{elem.Name}</Label> */}
                <TextField label={elem.Name} name={elem.Name} onChange={(ev) => this.handelchange(ev, i)} value={elem.Value} />
            </div>;
            case 'General Options':
            return <div className="form-group" key={i} >
            <Label>{elem.Name}</Label>
            {
              elem.options.map((opt, k) =>{
              return <div key={k}>
                  <Checkbox label={opt.Name} name={opt.Name} checked={opt.Value} onChange={(ev) => this.handelchangeoptions(ev)}/> 
              </div>
              })
            }    
            </div>;
            case 'Choice':
            return <div className="form-group" key={i} >
            <Label>{elem.Name}</Label>{
                    elem.options.map((options, k)=> {
                    return <div key={k}>
                    <Label>Name</Label>
                        <TextField className="form-group" key={k +'1'} name={options.Text} value={options.Text} onChange={(ev) => this.handelChoicechange1(ev,elem.Name, k)}/>
                        <Label>Value</Label>
                        <TextField className="form-group" key={k} name={options.Text} value={options.value} onChange={(ev) => this.handelChoicechange(ev,elem.Name, k)} />
                        {options.url ? <TextField className="form-group" key={k+'2'} name={options.Text} value={options.url} onChange={(ev) => this.handelChoicechange2(ev, k)} /> : null
                        }
                        
                        <Icon iconName="BoxSubtractSolid" className="ms-IconExample"  onClick={() => this.deleteoption(k, elem.Name)}/>
                        </div>
                    }) 
                }
                <PrimaryButton secondaryText="Add more option" onClick={() => this._addoptions(elem.Name)} text="+"/> 
            </div>;
            case 'overflowItems':
            return <div className="form-group" key={i} >
            <Label>{elem.Name}</Label>{
                    elem.options.map((options, k)=> {
                    return <div key={k}>
                    <Label>Name</Label>
                        <TextField className="form-group" key={k +'1'} name={options.Text} value={options.Text} onChange={(ev) => this.handelChoicechange1(ev,elem.Name, k)}/>
                        <Label>Value</Label>
                        <TextField className="form-group" key={k} name={options.Text} value={options.value} onChange={(ev) => this.handelChoicechange(ev, elem.Name, k)} />
                        <Icon iconName="BoxSubtractSolid" className="ms-IconExample"  onClick={() => this.deleteoption(k, elem.Name)}/>
                        </div>
                    }) 
                }
                <PrimaryButton secondaryText="Add more option" onClick={() => this._addoptions(elem.Name)} text="+"/> 
            </div>;
            case 'Title':
            return <div className="form-group" key={i} >
                <TextField label={elem.Name} name={elem.Name} onChange={(ev) => this.handelchange(ev, i)} value={elem.Value} />
            </div>;
            case 'Text':
            return <div className="form-group" key={i} >
                <Label>{elem.Name}</Label>
                <textarea name={elem.Name} value={elem.Value} className="form-control" rows="6" cols="50" onChange={(ev) => this.handelchange(ev, i)} >{elem.Value}</textarea>
            </div>;
            case 'Url':
            return <div className="form-group" key={i} >
                    <TextField label={elem.Name} name={elem.Name} onChange={(ev) => this.handelchange(ev, i)} value={elem.Value} />
                </div>;
            case 'maximum':
            return <div className="form-group" key={i} >
                    <TextField label={elem.Name} name={elem.Name} onChange={(ev) => this.handelchange(ev, i)} value={elem.Value} />
                </div>;
            case 'minimum':
            return <div className="form-group" key={i} >
                    <TextField label={elem.Name} name={elem.Name} onChange={(ev) => this.handelchange(ev, i)} value={elem.Value} />
                </div>;  
            case 'step':
            return <div className="form-group" key={i} >
                    <TextField label={elem.Name} name={elem.Name} onChange={(ev) => this.handelchange(ev, i)} value={elem.Value} />
                </div>;  
            default: return ''; 
        }   
        })
    }
    return (
       <div className="App">
       <header className="dark"><h3>Drag And Drop Example</h3>  <Link className="preview" href="/sample">Preview</Link></header>
         <div className="container-fluid">
         <div className="page-builder row">
             <div className="col-md-2 listrow">
               { listItems }
             </div>
             <div className="col-md-7 Droppable" onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e)}} onDragLeave={(e)=> {this.dragLeave(e)}} onDragEnter={(e)=>{this.dragEnter(e)}}>
                { DropItems.length>0 ? DropItems: <p className="text-align form-group">Drop Here</p>}
            </div>
            {showResults ? <div className="col-md-3 md3">
                { allsettings}
            </div>: null}
        </div>
       </div>
      {/* <Router history={history}>
          <Switch>
          <Route exact path='/' component={DragDrop} />
            <Route exact path='/sample' component={Sample} />
          </Switch>
        </Router> */}
      </div>
    );
  }
}
export default App;