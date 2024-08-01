import React from "react";
import Link from "next/link";
export function NavBar({ ClickHandler }) {
  return (
    <nav className="main-menu collapse navbar-collapse">
      <ul>
        <li className="menu-item-has-children active">
          <Link onClick={ClickHandler} href="/">
            <span>Banking & Tax</span>
          </Link>
          <ul className="submenu">
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Personal Banking</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Loans</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Auto Loans</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Personal Loans</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Home loans and Mortgage</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Cards</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Debit Cards</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Credit Cards</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Bank Guarantees</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Accounts</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Current Account</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Saving Account</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Business Banking</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Accounts</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Business Accounts Types</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Prestige</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Preferred</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Standard Business Banking</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Cards Credit Cards</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Loans</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Project Financial POS Loans</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Secured Business Loans</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Small Business Loan</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Business Vehicle Loan</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Corporate Banking</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Payroll Solutions and WPS</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Corporate Bonds</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>National Bonds</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Treasury Bonds</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Trade Finance</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Export/Import Trade Finance</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Commodity Finance</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Letter of Credits</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Tax</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>VAT</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Corporate tax</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link onClick={ClickHandler} href="/">
            <span>Business Setup & Residency</span>
          </Link>
          <ul className="submenu">
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Offshore</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Residency</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Why UAE</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Types of Visas and Benefits</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Freelance Visa</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Golden Visa</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Investor and Employment Visa</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>How to be a resident with an employee visa</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>
                      How to be resident with an investor visa and mainland free
                      zone company
                    </span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Cost of getting residency in UAE</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Benefits</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>How to renew appliance UAE visa</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Inside UAE</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Outside UAE</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Documents Required</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Finance</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Introduction</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Advantages</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Steps to start a freezone company in UAE</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Requirements</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Freezone cost calculator</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>CTA</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Activities</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Content</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Registration Process</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Mainland vs Freezone Comparison</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>The Process</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Pricing</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Contact US</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Mainland</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Introduction</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Benefits</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Steps to start Mainland company in UAE</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Requirements</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>CTA</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Sponsorship</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Situations when sponsorship is required</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>LLC sponsorship</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Procedure and Advantages</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link onClick={ClickHandler} href="/">
            <span>Wealth Management</span>
          </Link>
          <ul className="submenu">
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Forex</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Digital Solutions (White Labeling)</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Liquidity Management</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Brokerage/Prop firm setup</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Real Estate</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Commercial</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Offplan</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Secondary</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Property Management</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Crypto</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>ICO & IDO Services</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Jurisdiction</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Crypto Banking</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Crypto Licensing</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Asset Tokenization</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Buying and Selling -----OTC/wholesale crypto</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Institutional Holding and Trading</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Institutional Trading Bots</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>VARA regulated accounts</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="menu-item-has-children">
          <Link onClick={ClickHandler} href="/">
            <span>Other Services</span>
          </Link>
          <ul className="submenu">
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Web Development and Marketing</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Intellectual Property Services</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Copyright</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Trade Mark</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Tourist Visa</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Legal Consulting</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Citizenship and Residency (Other Countries)</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Insurance Services</span>
              </Link>
              <ul className="submenu">
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Property Insurance</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Business Insurance</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Health Insurance</span>
                  </Link>
                </li>
                <li>
                  <Link onClick={ClickHandler} href="/">
                    <span>Life Insurance</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Account Services</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Trust Foundation</span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>
                  Will Preparation <br />
                  Service
                </span>
              </Link>
            </li>
            <li className="menu-item-has-children">
              <Link onClick={ClickHandler} href="/">
                <span>Golden Visa</span>
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link onClick={ClickHandler} href="/contact">
            <span>Contact us</span>
          </Link>
        </li>
        <li>
          <Link onClick={ClickHandler} href="/about">
            <span>About us</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
