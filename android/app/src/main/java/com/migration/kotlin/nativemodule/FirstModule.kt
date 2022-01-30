package com.migration.kotlin.nativemodule

import com.facebook.react.bridge.*
import com.facebook.react.bridge.ReactMethod
import java.util.*

class FirstModule(context: ReactApplicationContext) : ReactContextBaseJavaModule() {

    override fun getName(): String {
        return "FirstModule"
    }

    @ReactMethod
    fun getTest(promise: Promise) {
        val test = "complete Test"
        promise.resolve(test)
    }
}