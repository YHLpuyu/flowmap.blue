import * as React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import styled from '@emotion/styled';

const examples = [
  { key: '1Z6dVVFFrdooHIs8xnJ_O7eM5bhS5KscCi7G_k0jUNDI', name: 'London bicycle hire' },
  { key: '1IQ0txD09cJ8wsQRSux5AoZfG6eIM-cx6RvVfszZ_ScE', name: 'NYC citibike' },
  { key: '1fhX98NFv5gAkkjB2YFCm50-fplFpmWVAZby3dmm9cgQ', name: 'Chicago taxis' },
  { key: '1aEgwtGUGc0TdnsO0jIm50hshCZ-m4DHms3P0Qq9IYdA', name: 'Template for publishing' },
]

const Outer = styled.div`
  padding: 10px 20px;
  & h1 { font-size: 2rem; }
  & li { margin: 0.5em 0; }
`

const Intro = () =>
  <Outer>
    <section className="intro">
      <h1><Logo fontSize={35} /></h1>

      <section>
        <p>
          This app can render a geographic flow map visualization
          from a spreadsheet published on
          {` `}<a href="https://docs.google.com/spreadsheets/" target="_blank" rel="noopener">Google Sheets</a>.
        </p>
        <p>
          It can be used to visualize numbers of movements of people or goods
          between pairs of geographic locations (Origin-Destination data).
        </p>
      </section>

      <section>
        <h2>Examples</h2>
        <ul>
          {
            examples.map(({ key, name }) =>
              <li key={key}>
                <Link to={`/${key}`}>{name}</Link>
                {` `}
                (<a
                  href={`https://docs.google.com/spreadsheets/d/${key}`}
                  target="_blank" rel="noopener"
                >spreadsheet</a>)
              </li>
            )
          }
        </ul>
      </section>

      <section>
        <h2>Publish your own dataset</h2>
        <p>
          To publish your own dataset with the app you need to have a Google account.{' '}
          <a href="https://accounts.google.com/signup" target="_blank" rel="noopener">Sign up here</a> if you don't have one yet.
        </p>
        <p>
          Once you have one, follow these steps:
        </p>
        <ol>
          <li>Open <a href="https://docs.google.com/spreadsheets/d/1aEgwtGUGc0TdnsO0jIm50hshCZ-m4DHms3P0Qq9IYdA" target="_blank" rel="noopener">this spreadsheet</a> and
            make a copy of it (File / Make a copy…)</li>
          <li>Add data to the spreadsheet.
            The spreadsheet has three sheets in it named "<b>properties</b>", "<b>locations</b>" and "<b>flows</b>".
            The <b>properties</b> sheet must have the name and a description for your dataset.
            The <b>locations</b> sheet must have these three columns: <b>id</b>, <b>lat</b>, <b>lon</b>.
            The <b>flows</b> sheet must have these three columns: <b>origin</b>, <b>dest</b>, <b>count</b>.
            The values in the <b>origin</b> and <b>dest</b> columns must reference the <b>id</b> values
            in the locations sheet.
            Make sure <b>not to enable number formatting</b> for the numeric columns or
            they won't be treated correctly.
          </li>
          <li>Publish your spreadsheet by going to "File" / "Publish to the web…"</li>
          <li>Share the spreadsheet by going to "File" / "Share with others", clicking "Advanced", then
            choosing "Anyone with the link can view".
            </li>
          <li>Copy the key of your spreadsheet from its URL. It comes right after docs.google.com/spreadsheets/d/</li>
          <li>Open{` `}
            <a href="http://flowmap.blue/YOUR_SPREADSHEET_KEY" target="_blank" rel="noopener">
              https://flowmap.blue/YOUR_SPREADSHEET_KEY
            </a>
          </li>
        </ol>
      </section>
      <section>
        <h2>Need help?</h2>
        <p>
          <a href="https://github.com/ilyabo/flowmap.blue/issues" target="_blank" rel="noopener">Submit an issue</a>{` or `}
          <a href="mailto:ilya@boyandin.me?subject=flowmap.blue">write me an email</a>.
        </p>
      </section>
      <section>
        <h2>Credits</h2>
        <p>
          Developed by {` `}
          <a href="https://ilya.boyandin.me" target="_blank" rel="noopener">Ilya Boyandin</a>  {` using `}
          <a href="https://github.com/teralytics/flowmap.gl" target="_blank" rel="noopener">flowmap.gl</a>,{` `}
          <a href="http://deck.gl" target="_blank" rel="noopener">deck.gl</a>,{` `}
          <a href="https://github.com/mapbox/mapbox-gl-js" target="_blank" rel="noopener">mapbox</a>,{` `}
          <a href="https://d3js.org/" target="_blank" rel="noopener">d3</a>
          {` with the kind support from `}
          <a href="https://www.teralytics.net" target="_blank" rel="noopener">Teralytics</a>.
        </p>
      </section>
    </section>

    <a href="https://github.com/ilyabo/flowmap.blue">
      <img
        style={{
          position: 'absolute', top: 0, right: 0, border: 0,
        }}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"
        alt="Fork me on GitHub" />
    </a>
  </Outer>


export default Intro
