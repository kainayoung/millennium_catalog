# Millennium Screens & Web Options

CCA's customized Millennium catalog screens & settings.

## Notes

For now, the files for the **Live** and **Staging** catalogs are separate directories because they've diverged significantly. Eventually, this repository won't need to hold multiple versions of the same file, because after all that's the job of version control.

Anything uploaded to **Live** is available at {{catalog URL}}/screens while anything uploaded to **Staging** is at {{catalog URL}}:2082/screens. They share the ILS database.

If you're looking at a catalog page & wondering what file it is, there'll be a comment outside the closing `</html>` tag at the bottom of the file. For instance, our default "search" page notes that `<!--this is customized <screens/opacmenu_s2.html>-->`.

"wwwoptions" contains global settings that affect many things in the catalog.
http://csdirect.iii.com/sierrahelp/Content/sril/sril_web_options.html

"webpub.def" defines which MARC fields are displayed or suppressed. It is an arcane format that makes MARC look readable by comparison.
http://csdirect.iii.com/sierrahelp/Content/sril/sril_webopac_webpub_def.html

## Todos

- [ ] add in Google Webmaster meta tags (only on live? or both?)
- [ ] there are probably still instances of linking to vm-lib-www-dev-01 instead of the live site scattering throughout staging
- [ ] delete unused files, ones with names like "mainmenux.html" "iperror403-network.html" seem they were primitive attempts to do branching with file names
- [ ] better patron log in/out screens
- [ ] build process: should be able to run `grunt` to minify JS & CSS at the least, possibly optimize images & (carefully) minify HTML as well
- [ ] this is probably the place to get online holds working, too
