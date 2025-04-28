import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Device } from './models/device.model';

@ApiTags('Devices') 
@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @ApiOperation({ summary: 'Create a new device' }) // Operatsiya tavsifi
  @ApiResponse({ status: 201, description: 'Device created successfully', type: Device })
  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @ApiOperation({ summary: 'Get all devices' })
  @ApiResponse({ status: 200, description: 'List of all devices', type: [Device] })
  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @ApiOperation({ summary: 'Get device by ID' })
  @ApiResponse({ status: 200, description: 'Device found successfully', type: Device })
  @ApiResponse({ status: 404, description: 'Device not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devicesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update device by ID' })
  @ApiResponse({ status: 200, description: 'Device updated successfully', type: Device })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }

  @ApiOperation({ summary: 'Delete device by ID' })
  @ApiResponse({ status: 200, description: 'Device deleted successfully' })
  @ApiResponse({ status: 404, description: 'Device not found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.devicesService.remove(+id);
  }
}
