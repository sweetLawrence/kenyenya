import React, { useState } from 'react'
import Tenders from './Tenders'

import Beef from '../docs/Beef.pdf';
import Bread from '../docs/Bread.pdf';
import Diesel from '../docs/Diesel.pdf';
import electrical from '../docs/electrical.pdf';
import extinguishers from '../docs/extinguishers.pdf';
import firewood from '../docs/firewood.pdf';
import ID from '../docs/ID.pdf';
import oil from '../docs/Oil.pdf';
import milk from '../docs/Milk.pdf';
import onions from '../docs/onions.pdf';
import plumbing from '../docs/plumbing.pdf';
import SALT from '../docs/salt.pdf';
import stationery from '../docs/stationery.pdf';
import uniform from '../docs/uniform.pdf';
import vegetables from '../docs/Vegetables.pdf';
import tracksuit from '../docs/tracksuits.pdf';
import beans from '../docs/beans.pdf';
import maize from '../docs/maize.pdf';
import cleaningmaterials from '../docs/cleaningmaterial2.pdf';
import fruits from '../docs/fruits3.pdf';
import jikos from '../docs/jikos.pdf';


const AllTenders = () => {
    const [active,setActive] = useState("");
    
    return (
        <div>
            <h3 className='patience'>Please be patient after clicking the <span className='pt'>download form</span> button</h3>
            <Tenders title="SUPPLY AND DELIVERY OF BEEF" active={active} setActive={setActive} category="KTTC/01/23/24" document={Beef} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF VEGETABLES" active={active} setActive={setActive} category="KTTC/02/23/24" document={vegetables} eligibility="SPECIAL" />
            <Tenders title="SUPPLY AND DELIVERY OF FRESH BREAD" active={active} setActive={setActive} category="KTTC/03/23/24" document={Bread} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF FRESH COW MILK" active={active} setActive={setActive} category="KTTC/04/23/24" document={milk} eligibility="OPEN" />

            <Tenders title="SUPPLY AND DELIVERY OF RICE, COOKING OIL" active={active} setActive={setActive} category="KTTC/05/23/24" document={oil} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF SUGAR,TEA LEAVES AND SALT" active={active} setActive={setActive} category="KTTC/06/23/24" document={SALT} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF STUDENT IDENTIFICATION CARDS" active={active} setActive={setActive} category="KTTC/07/23/24" document={ID} eligibility="SPECIAL" />
            <Tenders title="SUPPLY AND DELIVERY OF PETROL AND DIESEL" active={active} setActive={setActive} category="KTTC/08/23/24" document={Diesel} eligibility="OPEN" />

            <Tenders title="SUPPLY AND DELIVERY OF FIREWOOD" active={active} setActive={setActive} category="KTTC/09/23/24" document={firewood} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF STUDENT TRACKSUIT" active={active} setActive={setActive} category="KTTC/10/23/24" document={tracksuit} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY TOMATOES & ONIONS" active={active} setActive={setActive} category="KTTC/11/23/24" document={onions} eligibility="SPECIAL" />
            <Tenders title="SUPPLY AND DELIVERY OF FRUITS" active={active} setActive={setActive} category="KTTC/12/23/24" document={fruits} eligibility="SPECIAL" />
            <Tenders title="SERVICING OF FIRE EXTINGUISHERS" active={active} setActive={setActive} category="KTTC/13/23/24" document={extinguishers} eligibility="OPEN" />

            <Tenders title="SUPPLY AND DELIVERY OF WORKERS UNIFORM" active={active} setActive={setActive} category="KTTC/14/23/24" document={uniform} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF ELECTRICAL MATERIALS" active={active} setActive={setActive} category="KTTC/15/23/24" document={electrical} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF PLUMBING MATERIALS" active={active} setActive={setActive} category="KTTC/16/23/24" document={plumbing} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF STATIONERY MATERIALS" active={active} setActive={setActive} category="KTTC/17/23/24" document={stationery} eligibility="SPECIAL" />
           

            
            {/* <Tenders title="SUPPLY AND DELIVERY OF MAIZE" active={active} setActive={setActive} category="KTTC/18/23/24" document={} eligibility="OPEN" /> */}
            {/* <Tenders title="SUPPLY AND DELIVERY OF BEANS" active={active} setActive={setActive} category="KTTC/19/23/24" document={} eligibility="SPECIAL" /> */}
           
            <Tenders title="SUPPLY AND DELIVERY OF CLEANING MATERIALS" active={active} setActive={setActive} category="KTTC/18/23/24" document={cleaningmaterials} eligibility="SPECIAL" />
            <Tenders title="SUPPLY AND DELIVERY OF MAIZE" active={active} setActive={setActive} category="KTTC/19/23/24" document={maize} eligibility="OPEN" />
            <Tenders title="SUPPLY AND DELIVERY OF BEANS" active={active} setActive={setActive} category="KTTC/20/23/24" document={beans} eligibility="SPECIAL" />
            <Tenders title="REPAIR AND MAINTENANCE OF COLLEGE JIKOS" active={active} setActive={setActive} category="KTTC/21/23/24" document={jikos} eligibility="OPEN" />
        </div>
    )
}

export default AllTenders