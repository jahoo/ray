class RaY.Models.Hero  
  keysDown: {}

  constructor: (@context) ->
    @image = new Image()
    @image.src = "images/game/hero.png"
    @width = 65
    @height = 95
    @x = 0
    @y = 0
    @frames = 1
    @interval = 4
    @currentFrame = 0
    @jumping = false
    @falling = false
    @jumpSpeed = 0
    @fallSpeed = 0
    
    @bindKeys()
  
  
  bindKeys: =>
    $("body").keydown (e) => @keysDown[e.keyCode] = true
    $("body").keyup (e)   => delete @keysDown[e.keyCode]
  
  update: =>
    @moveLeft()  if 37 of @keysDown
    @moveRight() if 39 of @keysDown
    @jump() if 32 of @keysDown
    @checkJump() if @jumping
    @checkFall() if @falling
    @draw()
  
  setPosition: (x,y) =>
    @x = x
    @y = y
    
  draw: =>
    try
      @context.drawImage(@image, 0, @height * @currentFrame, @width, @height, @x, @y, @width, @height)
    catch e
    
    if @interval == 4
      @nextFrame()
      @interval = 0
    @interval += 1
  
  nextFrame: =>
    if @currentFrame == @frames
      @currentFrame = 0
    else
      @currentFrame += 1

  jump: =>
    if !@jumping && !@falling
      @fallSpeed = 0
      @jumping = true
      @jumpSpeed = 17
  
  checkJump: =>
    @setPosition(@x, @y - @jumpSpeed)
    @jumpSpeed -= 1
    if @jumpSpeed == 0
      @jumping = false
      @falling = true
      @fallSpeed = 1
  
  checkFall: =>
    if @y < @context.canvas.height - @height
      @setPosition(@x, @y + @fallSpeed)
      @fallSpeed += 1
    else
      @fallStop()
      
  fall: =>
    @falling = true
      
  fallStop: =>
    @falling = false
    @fallSpeed = 0
    
  moveLeft: =>
    @setPosition(@x - 5, @y) if @x > 0
  
  moveRight: =>
    @setPosition(@x + 5, @y) if @x + @width < @context.canvas.width

  collides: (object) =>
    @x < object.x + object.width &&
    @x + @width > object.x && 
    @y + @height > object.y && 
    @y + @height < object.y + object.height

