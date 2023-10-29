# 0x00 使用自定义toolbar



通过`setSupportActionBar(toolbar)`设置使用

# 0x01 设置系统返回键可用

通过`supportActionBar.setDisplayHomeAsUpEnabled(true)`设置系统返回键可用。

# 0x02 修改返回键颜色

```kotlin
val upArrow = ContextCompat.getDrawable(this, R.drawable.abc_ic_ab_back_material)
                    upArrow?.setColorFilter(ContextCompat.getColor(this, android.R.color.black), PorterDuff.Mode.SRC_ATOP)
                    supportActionBar?.setHomeAsUpIndicator(upArrow)
```