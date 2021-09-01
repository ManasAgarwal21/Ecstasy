import React, { useState } from 'react';
import { Paper, IconButton, InputBase, Divider } from '@material-ui/core';
import { FilterListRounded, Search, PinDropRounded, PinDropOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      padding: '0px 4px',
      margin: '4px 10px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      minWidth: '300px',
      maxWidth: '450px',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    colouredIconButton: {
        color: theme.palette.primary.main,
        padding : 6
    },
    iconButton: {
      padding: 6,
    },
    divider: {
      height: 24,
      margin: 4,
    }
}));

export default function SearchBar(){
    // const [searchedData, setSearchedData] = useState([{
    //     name: '',
    //     price: '',
    //     description: '',
    //     rating: 0,
    //     image: '',
    //     favourite: false
    // }]);
    const [searchTerm, setSearchTerm] = useState({
        term: '',
        filters: {
            price: '',
            brand: '',
            rating: '',
            category: ''
        },
        location: {
            lat: 0,
            long: 0
        }
    });
    const [flags, setFlags] = useState({
        fillfilter : false,
        fillGps : false
    });
    const classNames = useStyles();

    const handleIconClick = (flag) => {
        setFlags({...flags, [flag] : !flags[flag]});
    }
    const handleChange = event => {
        setSearchTerm({...searchTerm, term: event.target.value});
    }

    return(
        <React.Fragment>
            <Paper component="form" className={classNames.root}>
                <IconButton className={classNames.colouredIconButton} aria-label="search">
                    <Search />
                </IconButton>
            <InputBase
                className={classNames.input}
                placeholder="Search Products"
                onChange={handleChange}
                value={searchTerm.term}
                inputProps={{ 'aria-label': 'search products' }}
            />
            <IconButton className={
                    (flags.fillFilter) ? 
                    classNames.colouredIconButton : 
                    classNames.iconButton
                } 
                aria-label="filter"
                onClick={() => handleIconClick("fillFilter")}
                >
                <FilterListRounded />
            </IconButton>
            <Divider className={classNames.divider} orientation="vertical" />
            <IconButton className={
                    (flags.fillGps) ? 
                    classNames.colouredIconButton : 
                    classNames.iconButton
                }
                aria-label="location search"
                onClick={() => handleIconClick("fillGps")}
                >
                { (flags.fillGps) ? 
                    <PinDropRounded/> : 
                    <PinDropOutlined/> }
            </IconButton>
            </Paper>
        </React.Fragment>
    )
}