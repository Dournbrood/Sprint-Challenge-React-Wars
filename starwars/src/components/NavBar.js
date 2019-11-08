import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md" className="shadow-sm fixed-top" >
                <NavbarBrand href="/">React Wars' Most Wanted</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">The High Ground</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/Dournbrood">GitHub (Meta, I know...)</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Turn In Bounties/Rewards</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Navigation;