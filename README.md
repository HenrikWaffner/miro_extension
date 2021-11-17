# Tracy for Miro
## About
Tracy is an plugin for Miro, that allows to hide connection lines and show them for a selection of objects in the board.
Furthermore, it allows to trace the connections of the connected objects up- and downward.
> Please use this with caution, since it might overwrite the style of all connections in a Miro board.  

## How to use the plugin
### Enabling the plugin
To enable the plugin, click the Icon in the Miro toolbar. After confirming the security prompt, the plugin is activated and can be used.
After enabling the plugin, the object menu is extended by four additional actions.

<img src="./doc_img/ui_activate.png" width="309">
<img src="./doc_img/ui_init.png" width="804">

### Hiding lines
 To hide lines, select a random object in the board and click the `hide all lines` button. Depending of the number of lines, this might take a while.
 
<img src="./doc_img/ui_hide.png" width="177">
<img src="./doc_img/result_hide.png" width="513">

### Trace direct connections
To trace direct connections, select one or multiple objects and click the `trace direct connections` button

<img src="./doc_img/ui_direct.png" width="177">
<img src="./doc_img/result_direct.png" width="520">

### Trace connections up
To not only trace the direct connections, but the connections of the connections leading to the object(s), select the origin object(s) and click the `trace up` button. 

<img src="./doc_img/ui_up.png" width="177">
<img src="./doc_img/result_up.png" width="523">

### Trace connections down
To do the same thing with connections from the selected object(s), click the `trace down` button

<img src="./doc_img/ui_down.png" width="177">
<img src="./doc_img/result_down.png" width="501">
